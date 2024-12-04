const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      fs.readFile("404.html", "utf-8", (err, data) => {
        res.send(data);
      });
    } else {
      res.send(data);
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf-8", (err, data) => {
    if (err) {
      fs.readFile("404.html", "utf-8", (err, data) => {
        res.send(data);
      });
    } else {
      res.send(data);
    }
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("contact-me.html", "utf-8", (err, data) => {
    if (err) {
      fs.readFile("404.html", "utf-8", (err, data) => {
        res.send(data);
      });
    } else {
      res.send(data);
    }
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("running");
});
