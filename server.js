const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//import routes
const userRoutes = require("./app/routes/user.routes");
const itemRoutes = require("./app/routes/catalog.routes");
const shoppingcartRoutes = require("./app/routes/shoppingcart.routes");
// parse request data content type application
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//create user routes
//app.use('/api/user',userRoutes);
require("./app/routes/user.routes.js")(app);
app.use("/api/item", itemRoutes);
app.use("/api/shoppingcart",shoppingcartRoutes);

app.listen(9000, () => {
  console.log(`Server is running on port 9000.`);
});
