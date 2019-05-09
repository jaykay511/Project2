var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/exaauthmples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  // app.post("/api/login", function(req, res) {
  //   db.Auth.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
  app.get("/api/login", (req,res) => {
    db.auth.findAll({}).then(r => res.json(r));
  })

  app.post("/api/login", (req,res) => {
    let rb = req.body;
    if(rb.loggedIn){
      console.log("logging in");
      db.auth.create({
        username: rb.username,
        password: rb.password,
        loggedIn: true
      }).then(login => res.json(login));
    }
    else{
      console.log('not logged in');
      res.send("you're already logged in");
    }
  });
};
