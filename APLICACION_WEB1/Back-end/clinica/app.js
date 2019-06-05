var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var departamentosRouter = require('./routes/departamentos');
var citasRouter = require('./routes/citas');
var personalRouter = require('./routes/personal');
var doctorRouter = require('./routes/Doctores');
var tratamientopacienteRouter = require('./routes/tratamientopaciente');
var historialRouter = require ('./routes/Historial');
var horariosRouter = require('./routes/horarios');
var tipopersonalRouter = require('./routes/tipopersonal');
var promocionesRouter = require('./routes/promociones');
var tratamientosRouter = require('./routes/tratamientos');
var connectionBD =  require('./routes/conexion');

var app = express();

// crear conexion con bd de datos para cualquier archivo
app.get(connectionBD, function (req,res) {
  res.send(res);
  });

// permitir cors para la conexion con express
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/departamentos',departamentosRouter);
app.use('/citas',citasRouter);
app.use('/personal',personalRouter);
app.use('/Doctores',doctorRouter);
app.use('/Historial',historialRouter);
app.use('/horarios',horariosRouter);
app.use('/tipopersonal',tipopersonalRouter);
app.use('/promociones',promocionesRouter);
app.use('/tratamientos',tratamientosRouter);
app.use('/tratamientopaciente',tratamientopacienteRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
