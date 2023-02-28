var express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var i = 0;
app.get("/procesar", function (req, res) {
  i++;
  console.log(i);
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  if (rndInt < 5) {
    res.status(500);
    res.send("error");
  } else {
    res.send("successxd");
  }
});

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.post("/custom-body/nuevo", function (req, res) {
  console.log(req.body, req.query);
  res.type("text/plain");
  res.send("success");
});

app.post("/on-error", function (req, res) {
  console.log(req.body, req.query);
  res.type("text/plain");
  res.status(500);
  res.send("error");
});

app.post("/new-data", function (req, res) {
  console.log(req.body, req.query, req.params);
  /* res.type("text/plain");
  res.send("success"); */
  res.status(500);
  res.send("error");
});

app.delete("/delete-canasta", function (req, res) {
  console.log("delete canastaa");
  console.log(req.body, req.query, req.headers);
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  // if (rndInt < 5) {
  res.status(500);
  res.send("error");
  // } else {
  // res.send("successxd");
  // }
});

app.post("/added-cheque", function (req, res) {
  console.log("Agregar cheque");
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  // if (rndInt < 5) {
  res.status(500);
  res.send("error");
  // } else {
  // res.send("successxd");
  // }
});

app.patch("/custom-body/nuevo/:param1/space/:param2", function (req, res) {
  console.log("add custommm-bodyyyyy");
  console.log(req.body, "----");
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  if (rndInt < 5) {
    res.status(500);
    res.send("error");
  } else {
    res.send("success custom body");
  }
});

app.patch("/test-patch/:ss", function (req, res) {
  console.log("add custommm-bodyyyyy patch");
  console.log(req.body);
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  /* if (rndInt < 5) {
    res.status(500);
    res.send("error");
  } else { */
  res.send("success custom body");
  // }
});
app.listen(2205, () => console.log("Servidor on port 2205"));
