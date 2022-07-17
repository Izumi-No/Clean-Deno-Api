import { HTTPHelperI } from "./../Interfaces/Helpers/HTTPHelper.ts";
import { HTTPResponse } from "@Shared/Types/HTTPResponse.ts";

export class HTTPHelper implements HTTPHelperI {
  badRequest(error: Error): HTTPResponse {
    return { status: 400, body: error };
  }

  forbidden(error: Error): HTTPResponse {
    return { status: 403, body: error };
  }

  unauthorized(): HTTPResponse {
    return { status: 401, body: "acesso não autorizado" };
  }

  serverError(error: Error): HTTPResponse {
    return { status: 500, body: error.message };
  }

  ok(data: any): HTTPResponse {
    return { status: 200, body: data };
  }

  noContent(): HTTPResponse {
    return { status: 204, body: null };
  }
}
