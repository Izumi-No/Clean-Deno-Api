import { HTTPResponse } from "@Shared/interfaces/HTTPResponse.ts";

// https://github.com/rmanguinho/clean-ts-api/blob/master/src/presentation/protocols/controller.ts
export interface Controller<T> {
  handle: (request: T) => Promise<HTTPResponse>;
}
//
