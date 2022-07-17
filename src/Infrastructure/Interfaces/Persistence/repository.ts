export interface baseRepositoryI<T> {
  create(data: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
}
