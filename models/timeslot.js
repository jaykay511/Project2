module.exports = function(sequelize, DataTypes) {
    var TimeSlot = sequelize.define('TimeSlot', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        timeslot: DataTypes.DATE
      });
    
      // TimeSlot.associate = (models) => {
      //   TimeSlot.belongsTo(models.Patient, {foreignKey: {name: "PatientId", unique: false} });
      //   TimeSlot.belongsTo(models.Doctor,{foreignKey: {name: "DoctorId", unique: false} });
      // }
      TimeSlot.associate = (models) => {
      TimeSlot.belongsTo(models.Patient, {through: models.TimeSlot, unique: false, foreignKey: {name: "PatientId", unique: false}});
      TimeSlot.belongsTo(models.Doctor, {through: models.TimeSlot, unique: false, foreignKey: {name: "DoctorId", unique: false}});
      }

      return TimeSlot;
    };