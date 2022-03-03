const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(9000, () => {
  console.log(`Server is running on port 9000.`);
});