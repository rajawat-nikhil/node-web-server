const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine', 'hbs')
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  now = new Date().toString();
  console.log(`${now} ${req.url} ${req.method}`);
  next();
});

app.get('/', (req, res) => {
  res.send({
    name: 'Nikhil',
    likes: [
      'singing',
      'sports'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port);
