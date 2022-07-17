import { UserModel } from "@Infrastructure/Persistence/DenoDB/Models/User.ts";

await UserModel.create({ name: "sla", passhash: "test", id: "test" });

console.log("sla:2", await UserModel.all());
