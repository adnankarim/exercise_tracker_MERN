const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv");

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, function () {
  console.log(`Server is Running on port:${port}`);
});
