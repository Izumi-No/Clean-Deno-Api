import { User } from "@Entities/User.ts";
import { UserDTO } from "@Shared/DTOs/User.ts";
import { UserModel } from "@Infrastructure/Persistence/DenoDB/Models/User.ts";

import { UserRepositoryI } from "@Infrastructure/Interfaces/Persistence/UserRepository.ts";

export class UserRepository implements UserRepositoryI {
  public async create(data: User) {
    return JSON.parse(
      JSON.stringify(await UserModel.create({ ...data }))
    ) as UserDTO;
  }
  public async getAll() {
    return (await UserModel.all()).map((user) =>
      JSON.parse(JSON.stringify(user))
    ) as UserDTO[];
  }
  public async getById(id: string) {
    return JSON.parse(
      JSON.stringify(await UserModel.where("id", id).first())
    ) as UserDTO;
  }
}
