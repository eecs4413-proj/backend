const express = require("express");
const cors = require("cors");
const database = require('../models/registration.model');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('/');
  console.log(req.url);
  console.log(req.path);
});

app.listen(9000, () => {
  console.log(`Server is running on port 9000.`);
  database.connection;
  database.connected();
  let results = [];
  let allUser = database.select('id');
  console.log(allUser);
});
