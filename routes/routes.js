import tennisDataController from '../controllers/dataTennisController';

module.exports = (app) => {
  
  //const todoList = require('../controllers/todoListController');

  app.get('/players', (req, res) => {
    tennisDataController.getAllSortedByID(req, res);
  })
  .get('/players/:id', (req, res) => {
    tennisDataController.getOnePlayerById(req, res);
  })
};