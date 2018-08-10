$(document).ready(function () {
    var randomNum = Math.floor(Math.random() * (120 - 18) + 18),
        blueRupee = Math.floor(Math.random() * (12 - 1) + 1),
        greenRupee = Math.floor(Math.random() * (12 - 1) + 1),
        purpleRupee = Math.floor(Math.random() * (12 - 1) + 1),
        redRupee = Math.floor(Math.random() * (12 - 1) + 1),
        yourScore = 0,
        wins = 0,
        losses = 0;

    console.log("blue: " + blueRupee);
    console.log("green: " + greenRupee);
    console.log("red: " + redRupee);
    console.log("purple: " + purpleRupee);

    function reset() {
        randomNum = Math.floor(Math.random() * (120 - 18) + 18);
        $(".total-score").html(randomNum);
        yourScore = 0;
        $(".score-board").html(yourScore);
        blueRupee = Math.floor(Math.random() * (12 - 1) + 1);
        greenRupee = Math.floor(Math.random() * (12 - 1) + 1);
        purpleRupee = Math.floor(Math.random() * (12 - 1) + 1);
        redRupee = Math.floor(Math.random() * (12 - 1) + 1);
    }


    $(".total-score").html(randomNum);
    $('#total-wins').html(wins);
    $('#total-losses').html(losses);
    $(".score-board").html(yourScore);

    $('#blue').click(function () {
        yourScore += blueRupee;
        $('.score-board').animate("fast", function () {
            $('.score-board').html(yourScore);

        });


    });

    $('#green').click(function () {
        yourScore += greenRupee;
        $('.score-board').animate("fast", function () {
            $('.score-board').html(yourScore);

        });
    });

    $('#purple').click(function () {
        yourScore += purpleRupee;
        $('.score-board').animate("fast", function () {
            $('.score-board').html(yourScore);

        });
    });

    $('#red').click(function () {
        yourScore += redRupee;
        $('.score-board').animate("fast", function () {
            $('.score-board').html(yourScore);

        });
    });


    $("img").click(function () {
        if (yourScore === randomNum) {
            wins++;
            $('#total-wins').html(wins);
            $('#announcement').html("You win!");
            reset();
        }

        if (yourScore > randomNum) {
            losses++;
            $('#total-losses').html(losses);
            $('#announcement').html("Sorry, you didn't win.");
            reset();
        }
    });

});