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
    // Patient.associate = models=> {
    //     Patient.belongsToMany(models.Prescription, { through: models.PrescriptionsPatients });
    // }
    return Patient;
  };