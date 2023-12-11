const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const user = sequelize.define('user', {
    ID_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Katasandi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    No_telp: {
      type: DataTypes.INTEGER,
      allowNull:true,
    }
});

module.exports = user;