const path = require("path");

module.exports = function (app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/login/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get('/dash', (req,res) => {
    res.render("dash", {username: req.query.user});
  });

  // app.get("/loggedIn", (req, res) => {
  //   console.log(req.query);
  //   res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};