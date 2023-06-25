const express = require("express");
const { randomIntFromInterval } = require("../toolboxes/helpers/utils");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("OK");
});

router.post("/auth/login", (req, res) => {
  const { body } = req;
  if ((body.username == "admin") & (body.password == "admin123")) {
    res.send({
      code: 200,
      data: {
        token_type: "Bearer",
        access_token: "484dfsdf8sd48fsdf",
        refresh_token: "4474dsa47asdasdasd",
        expires_at: new Date(),
        expires_at_refresh: new Date(),
        user: {
          id: 1,
          name: "Diego Mathius",
          lastname: "Ramon N",
          phone: 54588484,
          email: "dsfsdf@random.gneil",
          role: "Admin",
        },
      },
      mesage: "OK",
    });
    return;
  }
  res.status(500);
  res.send({
    code: 500,
    body: "There are errors",
    message: "There are errors",
  });
});

router.get("/procesar", function (req, res) {
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  if (rndInt < 5) {
    res.status(500);
    res.send("error");
  } else {
    res.send("successxd");
  }
});

router.post("/custom-body/nuevo", function (req, res) {
  res.type("text/plain");
  res.send("success");
});

router.post("/on-error", function (req, res) {
  res.type("text/plain");
  res.status(500);
  res.send("error");
});

router.post("/new-data", function (req, res) {
  res.status(500);
  res.send("error");
});

router.delete("/delete-canasta", function (req, res) {
  res.type("text/plain");
  res.status(500);
  res.send("error");
});

router.post("/added-cheque", function (req, res) {
  res.type("text/plain");
  res.status(500);
  res.send("error");
});

router.patch("/custom-body/nuevo/:param1/space/:param2", function (req, res) {
  res.type("text/plain");
  const rndInt = randomIntFromInterval(1, 10);
  if (rndInt < 5) {
    res.status(500);
    res.send("error");
  } else {
    res.send("success custom body");
  }
});

router.patch("/test-patch/:ss", function (req, res) {
  res.type("text/plain");
  res.send("success custom body");
});

module.exports = router;
