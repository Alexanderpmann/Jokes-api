const express = require("express");
const app = express();
const port = 8000;

// Be sure to add this line after mkaing mongoose.config
require("./server/config/mongoose.config");

// Don't forget this line for working with post data
app.use(express.json(), express.urlencoded({ extended: true }));

// Make sure this line comes AFTER the parsing line
const AllMyRoutes = require("./server/routes/jokes.routes");
AllMyRoutes(app);

// use backticks instead of quotation marks to render in terminal
app.listen(port, () => console.log(`Running on port ${port}!!`));