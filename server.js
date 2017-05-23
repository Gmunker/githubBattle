const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`)
  } else {
    next();
  }
});

  app.use(express.static(__dirname + '/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
  });
  
  app.listen( process.env.PORT || 3000, () => {
    let port = "";
    if (process.env.PORT) {
      port = JSON.stringify(process.env.PORT);
    } else {
      port = 3000;
    }
    console.log(`Express server is u on port ${ process.env.PORT || 3000}`)
});