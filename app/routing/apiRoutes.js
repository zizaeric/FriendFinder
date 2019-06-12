var friends = require("../data/friends");

module.exports = function (app) {
    // route to display the contents of friends.js in the data directory
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        var userData = req.body;
        var userScores = userData.scores;

        // var totalDiff = 0;
        var totalDiff;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDiff = 0;

            console.log(currentFriend.name);

            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                // console.log("current Friend Scores: " + currentFriendScore);
                // // console.log(currentFriendScore);
                // console.log("current user score: " + currentUserScore);
                // // console.log(userScores[j]);


                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDiff <= bestMatch.friendDiff) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = totalDiff;
            }
        }
        // console.log(req.body);
        // console.log(userData.scores);
        friends.push(userData);
        // console.log(userData);

        res.json(bestMatch);
    });
};