const path = require("path");
const db = require("../models");

module.exports = function (app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/login/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get('/dash', (req,res) => {
    let email = req.query.user;
    db.Patient.findAll({where: {email: email}}).then(r => {
      let user = r[0];
      db.auth.findAll({where: {username: email}}).then(re => {
        let auth = re[0];
        //console.log("user.id:", user.id);
        //TODO: hook user.id to id field
        db.TimeSlot.findAll({include: [{model: db.Doctor},{model: db.Patient, where: {id: 4}}]}).then(results => {
          //[db.Doctor, db.Patient],where: {PatientId: user.id}}).then(results => {

      //console.log("this is the user info: " + user.email);
      res.render("dash", {
          profile: {
            id: user.id,
            first: user.first_name,
            last: user.last_name,
            address: user.address,
            phone: user.phone,
            email: user.email,
            created: user.createdAt,
            updated: user.updatedAt
          },
          auth: {
            loggedIn: auth.loggedIn
          },
          timeslots: results
        });
      });
      });
    });
  });

  // app.get("/loggedIn", (req, res) => {
  //   console.log(req.query);
  //   res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};