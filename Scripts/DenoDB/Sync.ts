import { UserModel } from "@Infrastructure/Persistence/DenoDB/Models/User.ts";
import { Database, SQLite3Connector } from "DenoDB";

const connector = new SQLite3Connector({
  filepath: Deno.env.get("SQLITE_PATH") || "./database.db",
});

const db = new Database({ connector });

db.link([UserModel]);
await db.sync();
