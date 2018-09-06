//configures fire base
var config = {
    apiKey: "AIzaSyCntumREcok8b1Dvy20ZV7QKGLQSAKzn0U",
    authDomain: "project-1-1ba1b.firebaseapp.com",
    databaseURL: "https://project-1-1ba1b.firebaseio.com",
    projectId: "project-1-1ba1b",
    storageBucket: "project-1-1ba1b.appspot.com",
    messagingSenderId: "662756809709"
};


firebase.initializeApp(config);


var database = firebase.database(),
    schedules = database.ref("/schedules"),
    trainName = "",
    destination = "",
    firstTrainTime = "",
    timeStamp = "",
    frequency = 0,
    updateTime;

//button for adding train schedules
$("#submit").on("click", function (event) {
    event.preventDefault();

    //gets user input
    trainName = $("#train-name").val().trim();
    destination = $("#destination-name").val().trim();
    firstTrainTime = $("#first-train-time").val();
    frequency = $("#frequency").val().trim();


    //makes temporary object to hold train data
    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
    };

    //pushes train data to firebase

    schedules.push(newTrain);

    //clears all the inputs
    $("#train-name").val("");
    $("#destination-name").val("");
    $("#first-train-time").val("");
    $("#frequency").val("");

});


//creates firebase listener event when a new item is added
schedules.on("child_added", function (snapshot) {

    //varibles to hold snapshots
    var tName = snapshot.val().trainName,
        destinationName = snapshot.val().destination,
        freq = snapshot.val().frequency,
        nextTrain = moment(snapshot.val().firstTrainTime, "HH:mm"),
        diffTime = Math.abs(moment().diff(nextTrain, "minutes"));


    //creates new row
    var newRow = $("<tr>").append(
        $("<td>").text(tName),
        $("<td>").text(destinationName),
        $("<td>").text(freq).attr("id", "freq"),
        $("<td>").text(nextTrain.format("HH:mm")).attr("id", "trainTime"),
        $("<td>").text(diffTime).attr("id", "timeDiff")
    ).attr("id", tName.split(" ").join(""));

    $("tbody").append(newRow);


    //clear interval & set new interval
    clearInterval(updateTime);

    updateTime = setInterval(nextArrival(snapshot.val()), 600000);

});

//update train time in 10 minutes
function nextArrival(obj) {

    if (updateTime === 0) {
        clearInterval(updateTime);
    }

    var tName = (obj.trainName).split(" ").join(""),
        trainFreq = obj.frequency,
        firstTrainTime = obj.firstTrainTime;

    if (moment().isAfter(moment(firstTrainTime, "HH:mm"))) {
        var newTime = moment(firstTrainTime, "HH:mm").add(trainFreq, "minutes"),
            timeGap = Math.abs(moment().diff(newTime, "minutes"));

        $("#" + tName + " > #trainTime").text(newTime.format("HH:mm"));
        $("#" + tName + " > #timeDiff").text(timeGap);

    }


}

