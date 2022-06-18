import { Model, DataTypes } from 'sequelize';
import { TeamEntity } from '../../entities/TeamEntity';
import db from '.';

class Team extends Model<TeamEntity> { }

Team.init(
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
    modelName: 'Team',
    timestamps: false,
  },
);

export default Team;
