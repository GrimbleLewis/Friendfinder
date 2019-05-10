var friends = require("../app/data/friends");

module.exports = function(app) {
  // displays the friends array 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // saves the survey input as the newFriend variable
    var newFriend = req.body;

    // loops through the newFriend survey answers and returns their answers as an array of intergers
    for (var i = 0; i < newFriend.scores.length; i++) {
      newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
    // create variables for the range of possible differences between two survey answer arrays
    var bestIndex = 0;
    var minDif = 40;

    // begin looping through the current stored friends objects from the friends array
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;

    // looks at the current friend objects score and gets the difference between each score in the that array
    // and the score in the newFriend.score array
    // each difference is then added to the totalDifference variable 
      for (var a = 0; a < friends[i].scores.length; a++) {
        var difference = Math.abs(newFriend.scores[i] - friends[i].scores[a]);
        totalDifference += difference;
      }

      // after looping through all of the friends.score arrays, the bestIndex is set to "i" which is the friend
      // with the smallest totalDifference number
      // minDif is then set to totalDifference incase you wanted to log how close the answers were 
      if (totalDifference < minDif) {
        bestIndex = i;
        minDif = totalDifference;
      }
    }

    // newFriend is then pushed to the friends array and the server responds with the information from the best friend match
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
