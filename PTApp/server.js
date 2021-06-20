const express = require('express');
const app = express();
const PORT = 8080; //default port 8080

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
}

const generateRandomString = function() {
  let randomlyGeneratedString = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let iterations = 0; iterations < 6; iterations++) {
    randomlyGeneratedString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomlyGeneratedString;
};

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/urls.json', (req, res) => {
  res.json(urlDatabase);
});

app.get('/hello', (req, res) => {
  res.send('<html><body>Hello <b>World</b></body></html>\n');
});

app.get('/urls', (req, res) => {
  const templateVars = { urls: urlDatabase };
  res.render('urls_index', templateVars);
});

app.get('/urls/new', (req, res) => {
  res.render("urls_new");
});

app.get('/urls/:shortUrl', (req, res) => {
  const templateVars = { shortURL: req.params.shortUrl, longURL: urlDatabase[req.params.shortUrl]};
  res.render('urls_show', templateVars);
});

app.get('/u/:shortUrl', (req, res) => {
  const longURL = urlDatabase[req.params.shortUrl];
  res.redirect(longURL);
});

app.post('/urls', (req, res) => {
  let newShortUrl = generateRandomString();
  urlDatabase[newShortUrl] = req.body.longURL;
  console.log(urlDatabase);
  res.redirect(`/urls/${newShortUrl}`);
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});