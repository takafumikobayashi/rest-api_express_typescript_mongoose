import * as express from 'express';
import { SystemConst } from './conf/const';
import * as resjson from 'commonResJson'


var cookieParser = require('cookie-parser');
var logger = require('morgan');

//router App
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen('3000')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.status(404);

  const response: resjson.Header = {
    code: SystemConst.RES_NG,
    message: 'Not Fonund',
    app: 'app',
    ver: null
  };

  res.send(response);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.header('Content-Type', 'application/json; charset=utf-8')

  const response: resjson.Header = {
    code: SystemConst.RES_NG,
    message: 'Internal Server Error!',
    app: 'app',
    ver: null
  };

  res.send(response);
});

module.exports = app;
