export enum ErrorType {
  // ******* 业务错误语义 ******* //
  PluginMarketIndexNotFound = 'pluginMarketIndexNotFound', // 插件市场索引解析失败
  PluginMarketIndexInvalid = 'pluginMarketIndexInvalid', // 插件市场索引无效

  PluginMetaNotFound = 'pluginMetaNotFound', // 没有找到插件元数据
  PluginMetaInvalid = 'pluginMetaInvalid', // 插件元数据无效

  PluginManifestNotFound = 'pluginManifestNotFound', // 插件描述文件不存在
  PluginManifestInvalid = 'pluginManifestInvalid', // 插件描述文件不存在
  // 密码无效
  InvalidAccessCode = 'InvalidAccessCode',
  // OpenAI 返回的业务错误
  OpenAIBizError = 'OpenAIBizError',

  // ******* 客户端错误 ******* //
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  ContentNotFound = 404, // 没找到接口
  MethodNotAllowed = 405, // 不支持
  TooManyRequests = 429,

  // ******* 服务端错误 ******* //
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

const getStatus = (errorType: ErrorType | string) => {
  switch (errorType) {
    case ErrorType.PluginMetaNotFound:
    case ErrorType.PluginManifestNotFound:
      return 404;

    case ErrorType.PluginMetaInvalid:
      return 490;
    case ErrorType.PluginManifestInvalid:
      return 491;

    case ErrorType.PluginMarketIndexNotFound:
      return 590;

    case ErrorType.PluginMarketIndexInvalid:
      return 590;
  }

  if (typeof errorType === 'number') return errorType;

  return 500;
};

export interface ErrorResponse {
  body: any;
  errorType: ErrorType | string;
}

/**
 * 创建一个错误响应对象
 * @param {ErrorType} errorType - 错误类型
 * @param body - 响应体数据
 * @returns {Response} - 错误响应对象
 */
export const createErrorResponse = (errorType: ErrorType | string, body?: string | object) => {
  // 获取错误类型对应的状态码
  const statusCode = getStatus(errorType);

  // 构造错误响应数据
  const data: ErrorResponse = { body, errorType };

  // 创建并返回错误响应对象
  return new Response(JSON.stringify(data), { status: statusCode });
};
