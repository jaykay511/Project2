var db = require("../models");


module.exports = function (app) {
  app.get("/api/login", (req, res) => {
    db.auth.findAll({}).then(r => res.json(r));
  });

  app.post("/api/login", (req, res) => {
    let rb = req.body;
    if (rb.loggedIn) {
      console.log("logging in");
      db.auth.create(rb).then(login => res.json(login));
    } else {
      console.log('not logged in');
      res.send("you're already logged in");
    }
  });

  app.put("/api/login", (req, res) => {
    console.log(req.body);
    db.auth.update({
      loggedIn: req.body.loggedIn
    }, {
      where: {
        username: req.body.username
      }
    }).then(r => res.json(r));
  });

  // Get all doctors
  app.get("/api/doctors", function(req, res) {
    db.Doctor.findAll({}).then(function(dbDoctors) {
      res.json(dbDoctors);
    });
  });

  // Create a new example
  app.post("/api/doctors", function(req, res) {
    db.Doctor.create(req.body).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

  // Delete an example by id
  app.delete("/api/doctors/:id", function(req, res) {
    db.Doctor.destroy({ where: { id: req.params.id } }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });
};