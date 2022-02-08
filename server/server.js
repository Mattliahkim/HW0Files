const express = require("express");

const PORT = 80;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/hw0", (req, res) => {
    res.sendfile("/root/meme/hw0.html");
  });
  
  app.get("/pancake.png", (req, res) => {
    res.sendfile("/root/hw1/pancake.png");
  });

  app.get("/hw1.yml", (req, res) => {
    res.sendfile("/root/hw1/hw1.yaml");
  });
