//var db = require("../models");

module.exports = function(sequelize, DataTypes) {
  var PrescriptionsPatient = sequelize.define('PrescriptionsPatient', {});

  // PrescriptionsPatient.associate = function(models) {
  //   PrescriptionsPatient.belongsTo(models.Prescription);
  //   PrescriptionsPatient.belongsTo(models.Patient);
  // //   models.Prescription.belongsToMany(models.Patient, { through: PrescriptionsPatient });
  // //   models.Patient.belongsToMany(models.Prescription, { through: PrescriptionsPatient });
  // };
  PrescriptionsPatient.associate = function(models) {
    PrescriptionsPatient.belongsTo(models.Patient, {through: models.PrescriptionsPatient, unique: false, foreignKey: {name: "PatientId", unique: false}});
    PrescriptionsPatient.belongsTo(models.Prescription, {through: models.PrescriptionsPatient, unique: false, foreignKey: {name: "PrescriptionId", unique: false}});
  }

  return PrescriptionsPatient;
};