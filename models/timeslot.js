module.exports = function(sequelize, DataTypes) {
    var TimeSlot = sequelize.define('TimeSlot', {
        timeslot: DataTypes.DATE
      });
    
      TimeSlot.associate = (models) => {
        models.Doctor.belongsToMany(models.Patient, { through: TimeSlot });
        models.Patient.belongsToMany(models.Doctor, { through: TimeSlot });
      }

      return TimeSlot;
    };