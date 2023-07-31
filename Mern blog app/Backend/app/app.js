var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registersRouter = require('./routes/register');
var blogsRouter = require('./routes/blog');
var getUsersRouter = require('./routes/getUser');
var getBlogsRouter = require('./routes/getBlog');
const database = require('./database/sql');
const cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','https://mern-blogs-app.netlify.app');
  res.setMethods('Access-Control-Allow-Methods','GET','POST','PUT','DELETE');
  res.setOrigin('Access-Control-Allow-Headers','Content-Types');
  next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registersRouter);
app.use('/blog', blogsRouter);
app.use('/getUserData', getUsersRouter);
app.use('/getBlogData', getBlogsRouter);

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
