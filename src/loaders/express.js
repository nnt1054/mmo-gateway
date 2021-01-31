import path from 'path';
import express from 'express';
import morgan from 'morgan'
import createError from 'http-errors';

import logger from './logger';
import config from '/config';
import routes from '/routes';
import viewsPath from '/views';
import publicPath from '/public';
import middlewares from '/middlewares';

var session = require('express-session');

export default ( app ) => {

  app.use(morgan('dev'))

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.set('views', viewsPath);
  app.set('view engine', 'ejs');

  app.use(express.static(publicPath));

  app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: false
  }));

  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Loading Application Routes
  app.use('/', routes());
  app.use(middlewares.attachCurrentUser);

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

}