//var db = require("../models");

module.exports = function(sequelize, DataTypes) {
  var PrescriptionsPatients = sequelize.define('PrescriptionsPatient', {});

  PrescriptionsPatients.associate = models=> {
    models.Prescription.belongsToMany(models.Patient, { through: PrescriptionsPatients });
    models.Patient.belongsToMany(models.Prescription, { through: PrescriptionsPatients });
  }

  return PrescriptionsPatients;
};