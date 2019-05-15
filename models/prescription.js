module.exports = function(sequelize, DataTypes) {
    var Prescription = sequelize.define("Prescription", {
      name: DataTypes.STRING
    });
    
    // Prescription.associate = function(models) {
    //    //Prescription.hasMany(models.PrescriptionPatient);
    //    Prescription.belongsToMany(models.Patient, { through: models.PrescriptionsPatient, unique: false });
    // }
    //Prescription.hasMany(Patient);
    return Prescription;
  };