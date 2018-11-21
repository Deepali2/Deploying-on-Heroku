const express = require("express"),
      app     = express();



app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3001, function() {
  console.log("I am listening on port 3001");
});
