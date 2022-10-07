const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.status(200).send({ msg: 'If you see this, all is well in the world!' });
});

app.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log('Listening on PORT 9090...');
});

module.exports = app;
