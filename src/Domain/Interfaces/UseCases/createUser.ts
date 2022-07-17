import { User } from "@Entities/User.ts";
import { CreateUserDTO } from "@Shared/DTOs/CreateUserDTO.ts";

export interface createUserUseCaseI {
  execute(user: CreateUserDTO): Promise<User>;
}
