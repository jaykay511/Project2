module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      specialty: DataTypes.STRING
    });

    // Doctor.associate = models=> {
    //   //      Patient.belongsToMany(models.Prescription, { through: models.PrescriptionsPatient });
    //     Doctor.belongsToMany(models.Patient, { through: models.TimeSlot, unique: false });
    //   }
    
    return Doctor;
  };
  