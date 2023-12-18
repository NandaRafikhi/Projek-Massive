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
    Jenis_Bahan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Warna: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Ukuran: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = barang;