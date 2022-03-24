const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const _ = require("lodash");
 

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to ConviStore application." });
});
require("../app/routes/registration.routes.js")(app);
app.listen(9000, () => {
  console.log(`Server is running on port 9000.`);
});