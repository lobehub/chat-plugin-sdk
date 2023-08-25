/* eslint-disable sort-keys-fix/sort-keys-fix */
export const PluginErrorType = {
  // ******* 业务错误语义 ******* //
  PluginMarketIndexNotFound: 'pluginMarketIndexNotFound', // 插件市场索引解析失败
  PluginMarketIndexInvalid: 'pluginMarketIndexInvalid', // 插件市场索引无效

  PluginMetaNotFound: 'pluginMetaNotFound', // 没有找到插件元数据
  PluginMetaInvalid: 'pluginMetaInvalid', // 插件元数据无效

  PluginManifestNotFound: 'pluginManifestNotFound', // 插件描述文件不存在
  PluginManifestInvalid: 'pluginManifestInvalid', // 插件描述文件不存在

  // ******* 客户端错误 ******* //
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  ContentNotFound: 404, // 没找到接口
  MethodNotAllowed: 405, // 不支持
  TooManyRequests: 429,

  // ******* 服务端错误 ******* //
  InternalServerError: 500,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
} as const;
/* eslint-enable */

export type IPluginErrorType = (typeof PluginErrorType)[keyof typeof PluginErrorType];

const getStatus = (errorType: IPluginErrorType | string) => {
  switch (errorType) {
    case PluginErrorType.PluginMetaNotFound:
    case PluginErrorType.PluginManifestNotFound:
      return 404;

    case PluginErrorType.PluginMetaInvalid:
      return 490;
    case PluginErrorType.PluginManifestInvalid:
      return 491;

    case PluginErrorType.PluginMarketIndexNotFound:
      return 590;

    case PluginErrorType.PluginMarketIndexInvalid:
      return 590;
  }

  if (typeof errorType === 'number') return errorType;

  return 500;
};

export interface ErrorResponse {
  body: any;
  errorType: IPluginErrorType | string;
}

/**
 * 创建一个错误响应对象
 * @param {IPluginErrorType} errorType - 错误类型
 * @param body - 响应体数据
 * @returns {Response} - 错误响应对象
 */
export const createErrorResponse = (
  errorType: IPluginErrorType | string,
  body?: string | object,
): Response => {
  // 获取错误类型对应的状态码
  const statusCode = getStatus(errorType);

  // 构造错误响应数据
  const data: ErrorResponse = { body, errorType };

  // 创建并返回错误响应对象
  return new Response(JSON.stringify(data), { status: statusCode });
};
