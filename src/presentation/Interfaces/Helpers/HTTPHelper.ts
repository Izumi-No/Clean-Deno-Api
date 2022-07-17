import { HTTPResponse } from "@Shared/Types/HTTPResponse.ts";

export interface HTTPHelperI {
  badRequest(error: Error): HTTPResponse;

  forbidden(error: Error): HTTPResponse;

  unauthorized(): HTTPResponse;

  serverError(error: Error): HTTPResponse;

  ok(data: any): HTTPResponse;

  noContent(): HTTPResponse;
}
