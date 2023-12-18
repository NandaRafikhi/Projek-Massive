const Product = require('../model/productModel');

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll({
        attributes: ['ID_barang', 'Stok', 'Jenis_Bahan', 'Warna', 'Ukuran', 'Harga']
        });
    res.json(products);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};