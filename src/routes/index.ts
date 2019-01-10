import * as express from 'express';
import { SystemConst } from '../conf/const';
import * as resjson from 'commonResJson'

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8')

  const response: resjson.Header = {
    code: SystemConst.RES_OK,
    message: 'This is TEST-API from Vertrek_Tokyo',
    app: 'index',
    ver: 'v1'
  };
  res.send(response);

});

module.exports = router;
