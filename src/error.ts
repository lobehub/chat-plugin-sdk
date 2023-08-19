export enum ErrorType {
  // ******* 业务错误语义 ******* //
  PluginMarketIndexNotFound = 'pluginMarketIndexNotFound', // 插件市场索引解析失败
  PluginMarketIndexParseError = 'pluginMarketIndexParseError', // 插件市场索引解析失败

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

const getStatus = (errorType: ErrorType) => {
  switch (errorType) {
    case ErrorType.PluginMarketIndexNotFound:
      return 404;

    case ErrorType.PluginMarketIndexParseError:
      return 590;
  }

  return errorType;
};

export interface ErrorResponse {
  body: any;
  errorType: ErrorType;
}

/**
 * 创建一个错误响应对象
 * @param {ErrorType} errorType - 错误类型
 * @param body - 响应体数据
 * @returns {Response} - 错误响应对象
 */
export const createErrorResponse = (errorType: ErrorType, body?: string | object) => {
  // 获取错误类型对应的状态码
  const statusCode = getStatus(errorType);

  // 构造错误响应数据
  const data: ErrorResponse = { body, errorType };

  // 创建并返回错误响应对象
  return new Response(JSON.stringify(data), { status: statusCode });
};
