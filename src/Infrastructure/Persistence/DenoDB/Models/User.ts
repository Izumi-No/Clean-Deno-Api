import { Model, DataTypes } from "DenoDB";

export class UserModel extends Model {
  static table = "user";

  static fields = {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    passHash: DataTypes.STRING,
  };
}
