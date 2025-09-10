const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.ronaldoRoute);
routes.get('/ulises', lesson1Controller.ulisesRoute);
routes.get('/mary', lesson1Controller.maryRoute);

module.exports = routes;