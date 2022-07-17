import opine, { Application, RequestHandler, ParamsDictionary } from "Opine";

class App {
  constructor(private app: Application) {
    this.app = opine();
  }

  listen(port = 3000, hostname = "0.0.0.0", callback: VoidFunction) {
    this.app.listen(`${hostname}:${port}`, callback);
  }

  use(...handlers: RequestHandler<ParamsDictionary, any, any>[]) {
    return this.app.use(handlers);
  }

  get() {
    this.app.get();
  }
}
