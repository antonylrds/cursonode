const Sequelize = require('sequelize');
const {Model} = require('sequelize');

class User extends Model{
  static init(connection){
      super.init({
        nome: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },{
        sequelize: connection
      });

      return this;
  }
}
module.exports = User;