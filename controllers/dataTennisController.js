import TennisPlayersModel from '../model/TennisPlayersModel';
import * as biblio from '../tools/function';
const axios = require('axios');
import config from '../config.json';


class AuthController {

    static getAllSortedByID = (req, res) => {
      axios.get(config.dataTennisPlayer)
        .then((response) => {
          if(response?.data?.players) {
            const tennisPlayerModel = new TennisPlayersModel(response.data);
            res.status(200).send(biblio.success('', tennisPlayerModel.getDataSortedByID()));
          } else {
            res.status(404).send(biblio.error('No players found', {}));
          }        
        })
        .catch((err) => {
          res.status(500).send(biblio.error(`error during fetching data ${err.stack}`, {}));
        })      
    }

    static getOnePlayerById = (req, res) => {
      axios.get(config.dataTennisPlayer)
        .then((response) => {
          if(response?.data?.players) {
            const id = req.params.id;
            const player = new TennisPlayersModel(response.data).getPlayerById(id);
            if (player === undefined) {
              res.status(404).send(biblio.error('No player matching', {}));
            } else {
              res.status(200).send(biblio.success('', player));
            } 
          } else {
            res.status(404).send(biblio.error('No players found', {}));
          }      
        })
        .catch((err) => {
          res.status(500).send(biblio.error(`error during fetching data --> ${err.stack}`, {}));
        })
    }

}

module.exports = AuthController;
