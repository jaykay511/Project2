const path = require("path");

module.exports = function (app) {
  
  app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/login/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get('/dash', (req,res) => {
    res.render("dash", {username: req.query.user});
  });

  app.get("/loggedIn", (req, res) => {
    console.log(req.query);
    res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};