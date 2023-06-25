const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();
app.use(cors());
const version = "/v1";
app.use(bodyParser.json());
app.use(version, router);

app.listen(2205, () => console.log("Servidor on port 2205"));
