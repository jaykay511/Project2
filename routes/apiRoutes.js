var db = require("../models");

module.exports = function(app) {
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
  app.delete("/api/examples/:id", function(req, res) {
    db.Doctor.destroy({ where: { id: req.params.id } }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });
};
