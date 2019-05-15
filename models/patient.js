//var db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Patient = sequelize.define("Patient", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING
    });

    //Patient.hasMany(Prescription);
    // Patient.associate = models => {
    // //      Patient.belongsToMany(models.Prescription, { through: models.PrescriptionsPatient });
    //   Patient.belongsToMany(models.Prescription, { through: models.PrescriptionsPatient, unique: false, foreignKey: {name: "PrescriptoinId", unique: false} });
    //   Patient.belongsToMany(models.Doctor, { through: models.TimeSlot, unique: false, foreignKey: {name: "DoctorId", unique: false} });
    // }
    return Patient;
  };