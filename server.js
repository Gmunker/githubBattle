const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`)
  } else {
    next();
  }
});

  app.use(express.static((__dirname + '/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
  });
  
  app.listen(PORT, function () {
	console.log(`Express server is up on port ${PORT}`);
});