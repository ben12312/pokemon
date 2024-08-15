const express = require("express");
const { getProbablity } = require('./probabiltyController');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', getProbablity);

app.listen(port, () => {
  console.log(`Probabilty Server run in port ${port}`);
});
