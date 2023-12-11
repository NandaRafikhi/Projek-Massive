const { Sequelize } = require('sequelize');

// Connect to MySQL using Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: '',
  host: 'localhost',
  database: 'sablon',
  logging: true, // Disable logging
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;