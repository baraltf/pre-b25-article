const http = require('http');
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.json());

app.set('view engine', 'hbs');
app.use('/public', express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

const isLogin = false;

app.get('/', function (request, response) {
  const title = 'Article';
  response.render('index', {
    title,
    isLogin,
  });
});

app.get('/article/:id', function (request, response) {
  const id = request.params.id;
  const title = 'Article';
  response.render('articleDetail', {
    title,
    isLogin,
  });
});

app.get('/add-article', function (request, response) {
  const title = 'Add Article';
  response.render('addArticle', {
    title,
    isLogin,
  });
});

app.get('/register', function (request, response) {
  const title = 'Resgiter';
  response.render('register', {
    title,
    isLogin,
  });
});

app.get('/login', function (request, response) {
  const title = 'Login';
  response.render('login', {
    title,
    isLogin,
  });
});

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.debug(`Server listening on port ${port}`);
