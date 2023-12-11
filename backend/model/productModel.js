const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');


const barang = sequelize.define('barang', {
  ID_barang: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama_barang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Stok: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
    Deskripsi: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = barang;