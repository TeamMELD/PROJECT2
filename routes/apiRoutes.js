var db = require("../models");

module.exports = function(app) {
  // Get all reports
  app.get("/api/reports", function(req, res) {
    db.Report.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // get specific report:
  app.get("/api/reports/:category", function(req, res) {
    db.Report.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Create a new report
  app.post("/api/reports", function(req, res) {
    console.log("in reports(POST)");
    db.Report.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Delete an report by id
  app.delete("/api/reports/:id", function(req, res) {
    db.Report.destroy({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });
};