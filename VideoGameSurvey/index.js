var express = require('express'),
    expressSession = require('express-session'),
    pug = require('pug'),
    jade = require('jade'),
    path = require('path'),
    route = require('./routes/routes.js'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
    user = require('./public/scripts/user.js');

//var salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync("",salt);
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public'))); 

var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.get('/', route.home);
app.get('/database', route.index);
app.get('/create', route.create);
app.get('/edit/:id', route.edit);
app.get('/details/:id', route.details);
app.post('/create', urlencodedParser, route.createEntry);
app.post('/edit/:id', urlencodedParser, route.editEntry);
app.get('/delete/:id', route.delete);

app.listen(3000);