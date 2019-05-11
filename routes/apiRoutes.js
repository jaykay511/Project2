var db = require("../models");

module.exports = function(app) {
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
};
