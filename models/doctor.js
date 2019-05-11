module.exports = function(sequelize, DataTypes) {
    var Doctor = sequelize.define("Doctor", {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      specialty: DataTypes.STRING
    });
    
    return Doctor;
  };
  