import { User } from "@Entities/User.ts";

export interface getAllUsersUseCaseI {
  execute(): Promise<User[]>;
}
