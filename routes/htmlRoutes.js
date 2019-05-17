const path = require("path");
const db = require("../models");

module.exports = function (app) {
  
  app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/login/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get('/dash', (req,res) => {
    let email = req.query.user;
    db.Patient.findAll({where: {email: email}}).then(r => {
      let user = r[0];
      //console.log(user);
      db.auth.findAll({where: {username: email}}).then(re => {
        let auth = re[0];
        //console.log("user.id:", user.id);
        db.TimeSlot.findAll({include: [{model: db.Doctor},{model: db.Patient, where: {id: user.id}}]}).then(results => {
          //[db.Doctor, db.Patient],where: {PatientId: user.id}}).then(results => {
          let times = results;
          //prescriptions call
          db.PrescriptionsPatient.findAll({include: {model: db.Patient, where: {id: user.id}}}).then(resu => {
            let drugs = resu;
            console.log("THESE ARE THE RESULTS FOR PRESCRIPTIONS PATIENT: " + JSON.stringify(resu));

            if(auth.loggedIn){
              res.render("dash", {
                profile: {
                  id: user.id,
                  first: user.first_name,
                  last: user.last_name,
                  address: user.address,
                  phone: user.phone,
                  email: user.email,
                  created: user.createdAt,
                  updated: user.updatedAt,
                  pic: user.pic
                },
                auth: {
                  loggedIn: auth.loggedIn,
                },
                timeslots: times,
                drugs: drugs,
              });
            }
            else{
              res.render("800");
            }
          });
        });
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};