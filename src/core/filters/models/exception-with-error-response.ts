interface IErrorMessage {
  message: unknown;
}

export interface IExceptionWithErrorResponse {
  response: IErrorMessage;
}
