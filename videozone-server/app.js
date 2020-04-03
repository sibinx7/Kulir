var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


const csrf = require('csurf');
const cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var videoRouter = require('./routes/video');

var app = express();


const swaggerConfig = {
  swaggerDefinition:{
    openapi: '3.0.0',
    info: {
      title: 'Videozone Server',
      version: '1.0.0',
      description: 'Videozone server APIs',      
    }    
  },
  host: 'http://localhost:8080',
  basePath: '/',
  apis:[
    "./controllers/**/*.js",
    "./controllers/*.js",
    "./routes/*.js",
    "./routes/*.yml",    
    "./docs/**/*.yml",    
    ".\docs\**\*.yml"    
  ]
}



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'docs')))
app.use(express.static(path.join(__dirname, 'database')))

app.use(cors());
app.options("*", cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/videos', videoRouter)

const csrfProtection = csrf({cookie: true});
app.use(csrfProtection);


const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

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
