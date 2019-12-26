import express from 'express';
import bodyParser from 'body-parser';
import morganImport from 'morgan'
import config from './config';
import routes from './routes/routes';

const app = express();

/*************
 * MiddleWare *
 **************/
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
app.use(morganImport('dev'));


const data = express.Router();

routes(data);

console.log(config.rootAPI);

app.use(`${config.rootAPI}/`,data);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
});

