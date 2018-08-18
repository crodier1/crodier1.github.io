$(document).ready(function () {
    var q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        correctAnswers = 0,
        wrongAnswers = 0,
        unanswered = 10,
        time = 60,
        clockCounter; 


    $("#questions").hide();
    $("#results").hide();

    $("#start").click(function () {
        $("#start").hide();        
        $("#questions").show();
        clockCounter = setInterval(clockTimer, 1000);
        clockTimer();
    });

    //question 1
    $("#right1").on('change', function () {
        q1 = 'true';
        console.log(q1);
    });

    $(".wrong1").on('change', function () {
        q1 = 'false';
        console.log(q1);
    });

    //question 2
    $("#right2").on('change', function () {
        q2 = 'true';
        console.log(q2);
    });

    $(".wrong2").on('change', function () {
        q2 = 'false';
        console.log(q2);
    });

    //question 3
    $("#right3").on('change', function () {
        q3 = 'true';
        console.log(q3);
    });

    $(".wrong3").on('change', function () {
        q3 = 'false';
        console.log(q3);
    });

    //question 4
    $("#right4").on('change', function () {
        q4 = 'true';
        console.log(q4);
    });

    $(".wrong4").on('change', function () {
        q4 = 'false';
        console.log(q4);
    });

    //question 5
    $("#right5").on('change', function () {
        q5 = 'true';
        console.log(q5);
    });

    $(".wrong5").on('change', function () {
        q5 = 'false';
        console.log(q5);
    });

    //question 6
    $("#right6").on('change', function () {
        q6 = 'true';
        
    });

    $(".wrong6").on('change', function () {
        q6 = 'false';
        
    });

    //question 7
    $("#right7").on('change', function () {
        q7 = 'true';
        
    });

    $(".wrong7").on('change', function () {
        q7 = 'false';        
    });

    //question 8
    $("#right8").on('change', function () {
        q8 = 'true';        
    });

    $(".wrong8").on('change', function () {
        q8 = 'false';        
    });

    //question 9
    $("#right9").on('change', function () {
        q9 = 'true';        
    });

    $(".wrong9").on('change', function () {
        q9 = 'false';        
    });

    //question 10
    $("#right10").on('change', function () {
        q10 = 'true';        
    });

    $(".wrong10").on('change', function () {
        q10 = 'false';        
    });


    //sumbit & time 
    $("#submitAnswers").click(function(){
        submitTimeUp();
        clearInterval(clockCounter);
    });

    function submitTimeUp() {
        $("#questions").hide();

        for (var i of [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]) {
            if (i === 'true') correctAnswers++;
            if (i === 'false') wrongAnswers++;
        }

        unanswered -= (correctAnswers + wrongAnswers);


        $("#correctAnswers").html(correctAnswers);
        $("#incorrectAnswers").html(wrongAnswers);
        $("#noAnswer").html(unanswered);
        $("#results").show();

    }

    function clockTimer(){
        $("#seconds").text(time);
        time -= 1;        

        if(time === 0){            
            clearInterval(clockCounter);
            submitTimeUp();    

        }
    }

    //Restart button
    $("#restart").click(function(){
        $("#results").hide();
        $("#questions").show();
        $(".answer").prop('checked', false);
        
        for(var j of [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]){
            j = "unanswered";
                        
        }

        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 10;
        time = 60;

        clockCounter = setInterval(clockTimer, 1000);
        clockTimer();
    });


});