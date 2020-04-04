/* eslint-disable no-console */
const express = require('express');
const path = require('path');
// serverside randomization only
// const { randomWaifu } = require('../database/seed.js');
const { findWaifus } = require('../database/index.js');

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

// serverside randomization only
// app.get('/api/testWaifu', (req, res) => {
//   const data = randomWaifu(1);
//   res.send(data);
// });

app.get('/api/loadWaifus', (req, res) => {
  findWaifus({})
    .then((waifus) => {
      res.send(waifus);
    });
});
