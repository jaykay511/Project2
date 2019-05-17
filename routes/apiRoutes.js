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
    //console.log(req.body);
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
    // console.log("req.body from api routes: " + rb.email);
    db.Patient.create(rb).then(res.send("new patient created"));
  });

  //update patient info
  app.put("/api/users", (req,res) => {
    let rb = req.body;
    console.log('this is the RB EMAIL: ' + rb.email);
    db.Patient.update(rb, {
    where: {
      email: rb.email
    }
    }).then(r => res.json(r));
  });

  // Get all doctors
  app.get("/api/doctors", function(req, res) {
    db.Doctor.findAll({}).then(function(dbDoctors) {
      res.json(dbDoctors);
    });
  });

  // Create a new doctor
  app.post("/api/doctors", function(req, res) {
    db.Doctor.create(req.body).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

  // Delete a doctor by id
  app.delete("/api/doctors/:id", function(req, res) {
    db.Doctor.destroy({ where: { id: req.params.id } }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });

  // Get all patients
  app.get("/api/patients", function(req, res) {
    db.Patient.findAll({}).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

  // Create a new patient
  app.post("/api/patients", function(req, res) {
    db.Patient.create(req.body).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

  // Delete an patients by id
  app.delete("/api/patients/:id", function(req, res) {
    db.Patient.destroy({ where: { id: req.params.id } }).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

   // Get all pills
   app.get("/api/pills", function(req, res) {
    db.Prescription.findAll({}).then(function(dbPills) {
      res.json(dbPills);
    });
  });

  // Create a new pills
  app.post("/api/pills", function(req, res) {
    db.Prescription.create(req.body).then(function(dbPills) {
      res.json(dbPills);
    });
  });

  // Delete an pills by id
  app.delete("/api/pills/:id", function(req, res) {
    db.Prescription.destroy({ where: { id: req.params.id } }).then(function(dbPills) {
      res.json(dbPills);
    });
  });

   // Get all timeslots
   app.get("/api/timeslots", function(req, res) {
    db.TimeSlot.findAll({include: [db.Doctor, db.Patient]}).then(function(dbTimeslots) {
      res.json(dbTimeslots);
    });
  });

  // Create a new timeslot
  app.post("/api/timeslots", function(req, res) {
    db.TimeSlot.create(req.body).then(function(dbTimeSlot) {
      res.json(dbTimeSlot);
    });
  });

  // Delete an timeslots by id
  app.delete("/api/timeslots/:id", function(req, res) {
    db.TimeSlot.destroy({ where: { id: req.params.id } }).then(function(dbTimeSlots) {
      res.json(dbTimeSlots);
    });
  });

  // Get all PrescriptionsPatients
  app.get("/api/prescriptionspatients", function(req, res) {
    db.PrescriptionsPatient.findAll({include: [db.Prescription, db.Patient]}).then(function(dbPrescriptionsPatients) {
      res.json(dbPrescriptionsPatients);
    });
  });

  // Create a new PrescriptionsPatients
  app.post("/api/prescriptionspatients", function(req, res) {
    console.log(req.body);
    db.PrescriptionsPatient.create(req.body).then(function(dbPrescriptionsPatients) {
      res.json(dbPrescriptionsPatients);
    });
  });

  // Delete an PrescriptionsPatients by id
  app.delete("/api/prescriptionspatients/:id", function(req, res) {
    db.PrescriptionsPatient.destroy({ where: { id: req.params.id } }).then(function(dbPrescriptionsPatients) {
      res.json(dbPrescriptionsPatients);
    });
  });
};
