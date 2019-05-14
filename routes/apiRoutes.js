const db = require("../models");


module.exports = function (app) {

  //Get all patients logins
  app.get("/api/login", (req, res) => {
    db.auth.findAll({}).then(r => res.json(r));
  });

  //Create a new user
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

  //Change user loggedIn Status from False to True upon login
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

  //add a patient to patient table when a new user is created
  app.post("/api/users", (req,res) => {
    let rb = req.body;
    //console.log("req.body from api routes: " + rb.email);
    db.Patient.create(rb).then(res.send("new patient created"));
  })

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