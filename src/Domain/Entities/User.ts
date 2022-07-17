export class User {
  constructor(
    public name: string,
    public passHash: string,
    public id?: string
  ) {
    this.id = id ? id : globalThis.crypto.randomUUID();
  }
}
