import { getAllUsersUseCaseI } from "@Domain/Interfaces/UseCases/getAllUsers.ts";
import { UserRepositoryI } from "@Infrastructure/Interfaces/Persistence/UserRepository.ts";

export class getAllUsers implements getAllUsersUseCaseI {
  constructor(private repo: UserRepositoryI) {}

  async execute() {
    return await this.repo.getAll();
  }
}
