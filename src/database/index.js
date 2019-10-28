const Sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const User = require('../app/models/User');

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // conexao com o banco
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();