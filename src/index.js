const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    msg: "boom u lookin for this?",
  });
});

app.listen(5000, () => {
  console.log("app listening on port 5000");
});
