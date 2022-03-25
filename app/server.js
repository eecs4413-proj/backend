const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// parse request data content type application
app.use(bodyParser.urlencoded({extended: false}));

//parse request data content type application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send('Hello World');
});

//import item routes
const itemRoutes = require('./routes/catalog.routes');

//import user routes
const userRoutes = require('./routes/registration.routes');

//create user routes
app.use('/api/user',userRoutes);

//
app.use('/api/item',itemRoutes);

app.listen(9000, () => {
  console.log(`Server is running on port 9000.`);
});