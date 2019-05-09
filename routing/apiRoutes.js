var friends = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend.scores);

    for (var i = 0; i < newFriend.scores.length; i++) {
      newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
    var bestIndex = 0;
    var minDif = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

      console.log(friends[i].scores);

      for (var a = 0; a < friends[i].scores.length; a++) {
        var difference = Math.abs(newFriend.scores[i] - friends[i].scores[a]);
        totalDifference += difference;
      }

      if (totalDifference < minDif) {
        bestIndex = i;
        minDif = totalDifference;
      }
    }

    friends.push(newFriend);
    res.json(friends[bestIndex]);
  });
};

// function totalDifference() {

//   for (var i = 0; i <newFriend.scores.length; i++) {
//     newFriend.scores[i] = parseInt(newFriend.scores[i]);
//   }
//   var bestIndex = 0;
//   var minDif = 40;

//   for (var i = 0; i < friends.length; i++) {

//     var totalDifference = 0;

//     console.log(friends[i].scores);

//     for (var a = 0; a < friends[i].scores.length; a++) {

//       var difference = Math.abs(newFriend.scores[i] - friends[i].scores[a]);
//       totalDifference += difference;
//     }

//     if(totalDifference < minDif) {
//       bestIndex = i;
//       minDif = totalDifference;
//     }

//   };
// }

// totalDifference();
