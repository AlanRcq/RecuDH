var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var cancionesRouter = require('./routes/canciones');
var generosRouter = require('./routes/generos');

var app = express();

app.listen(3000, () => console.log("Puerto 3000 funcionando correctamente"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/canciones', cancionesRouter);
app.use('/generos', generosRouter);
app.use('/', indexRouter);



module.exports = app;
