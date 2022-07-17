import { User } from "@Entities/User.ts";
import { createUserUseCaseI } from "@Domain/Interfaces/UseCases/createUser.ts";
import { UserRepositoryI } from "@Infrastructure/Interfaces/Persistence/UserRepository.ts";
import { CreateUserDTO } from "@Shared/DTOs/CreateUserDTO.ts";

export class createUser implements createUserUseCaseI {
  constructor(private repo: UserRepositoryI) {}

  async execute(data: CreateUserDTO) {
    const user = new User(data.name, data.passHash);
    await this.repo.create(user);
    return user;
  }
}
