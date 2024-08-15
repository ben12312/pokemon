const express = require("express");
const { getRename } = require('./renameController');
const cors = require('cors');
const app = express();
const port = 6060;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', getRename);

app.listen(port, () => {
  console.log(`Rename Server run in port ${port}`);
});
