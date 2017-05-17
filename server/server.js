'use strict';

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

app.use(logger('dev'));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/../client/public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/api/classifieds', require('./routes/classifieds'))

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, '/../client/public')})
})

// const messages = require('./server/routes/classifieds');
// app.use('/classifieds',messages);


const port = process.env.PORT || 3000;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
