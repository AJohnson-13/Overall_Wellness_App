const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers: {
      year: () => new Date().getFullYear()
    }
  })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log(`Overall Wellness app running on port ${PORT}`);
});
