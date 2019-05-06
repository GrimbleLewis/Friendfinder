var path = require('path');

module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
      });
    
      // All other routes respond with the index.html file
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
      });
};