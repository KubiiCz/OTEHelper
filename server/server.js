const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
}

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", cors() ,(req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// simple route
app.get("/users", cors(), (req, res) => {
    res.json({ message: "There is no users.." });
  });

// simple route
app.get("/user/:id", cors(), (req, res) => {
    console.log(req.params)
    var message = req.params.id
    res.json({ message: message});
  });

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
