const express = require("express");

const PORT = 80;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/hw0", (req, res) => {
    res.sendFile("/root/meme/hw0.html");
  });
  
  app.get("/pancake.png", (req, res) => {
    res.sendFile("/root/meme/pancake.png");
  });

  app.get("/hw1.yml", (req, res) => {
    res.sendFile("/root/meme/hw1.yaml");
  });