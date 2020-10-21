const express = require('express');
const path = require('path');
const Waifu = require('./models/Waifu');

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/loadWaifu', (req, res) => {
  const randomWaifu = new Waifu();
  res.send(randomWaifu);
});

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
