import { ErrorResponse, ErrorType } from '@/types/error';

const getStatus = (errorType: ErrorType) => {
  // TODO: Add ErrorSwitch
  // eslint-disable-next-line no-empty
  switch (errorType) {
  }

  return errorType;
};

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
