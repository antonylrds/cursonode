const User = require("../models/User");

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

  async show(req, res) {
    const {id} = req.params;
    const user = await User.findOne({where: {
      id
    }});
    return res.json(user);
  }

  async update(req, res) {
    const {id} = req.params;
    const user = await User.findOne({where: {
      id
    }});

    if(!user){
      return res.status(404).json({error: "User not found"});
    }
    if(!req.body.nome  || req.body.password_hash){
      return res.status(400).json({error: "All params must be fullfiled"});
    }

    user.update(req.body);

    return res.json(user);
  }

  async delete(req, res) {
    const {id} = req.params;
    const user = await User.findByPk(id);

    user.destroy();


    return res.json({message: "Usuario removido"});
  }
}

module.exports = new UserController();
