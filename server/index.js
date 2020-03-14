const express = require('express');
const path = require('path');

const app = express();
const port = 1429;

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '../client/dist')));