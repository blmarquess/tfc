import { Model, DataTypes } from 'sequelize';
import db from '.';

class Teams extends Model { }

Teams.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Teams',
    timestamps: false,
  },
);

export default Teams;
