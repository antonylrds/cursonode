const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');

routes.get('/users', UserController.index);

routes.get('/users/:id', UserController.show);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.delete);

module.exports = routes;