const express = require("express");
const { getRelease } = require('./releaseController');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', getRelease);

app.listen(port, () => {
  console.log(`Release Server run in port ${port}`);
});
