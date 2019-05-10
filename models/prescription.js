module.exports = function(sequelize, DataTypes) {
    var Prescription = sequelize.define("Prescription", {
      name: DataTypes.STRING
    });
    
    // Prescription.associate = models=> {
    //   Prescription.belongsToMany(models.Patient, { through: PrescriptionsPatients });
    // }
    //Prescription.hasMany(Patient);
    return Prescription;
  };