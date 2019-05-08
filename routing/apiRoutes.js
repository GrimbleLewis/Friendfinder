var friends = require('../app/data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
      });

    app.post('/api/friends', function(req, res) {
      var newFriend = req.body;
      res.json(newFriend);

      friends.push(newFriend);

    });
};

function totalDifference() {
  for (var i = 0; i < friends.length; i++) {


    console.log(friends[i].scores);

    for (var a = 0; a < friends[i].scores.length; a++) { 
        
    }
  };
}

totalDifference();