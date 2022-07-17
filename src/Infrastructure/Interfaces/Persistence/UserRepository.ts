import { baseRepositoryI } from "@Infrastructure/Interfaces/Persistence/repository.ts";

import { User } from "@Entities/User.ts";

export type UserRepositoryI = baseRepositoryI<User>;
