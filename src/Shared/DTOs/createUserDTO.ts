import { UserDTO } from "@Shared/DTOs/User.ts";

export type CreateUserDTO = Omit<UserDTO, "id">;
