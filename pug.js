const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
