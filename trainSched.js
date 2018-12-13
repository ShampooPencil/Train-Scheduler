 // Initialize Firebase
 //var storeMins = $("<td>").text(minutesAway).val().trim();
 var newRow;
 var listOfTrains = 2;
 var config = {
    apiKey: "AIzaSyDFU_yqG4ASFdArCOKQTfozhTcd5TU7qOw",
    authDomain: "train-schedule-8f97f.firebaseapp.com",
    databaseURL: "https://train-schedule-8f97f.firebaseio.com",
    projectId: "train-schedule-8f97f",
    storageBucket: "train-schedule-8f97f.appspot.com",
    messagingSenderId: "362764208594"
  };
  firebase.initializeApp(config);

  var trainData = firebase.database();

  $("#submit").on("click", function(){
      var trainName = $("#train_name").val().trim(); 
      var destination = $("#destination").val().trim();
      var trainTime = $("#train_time").val().trim(); 
      var frequency = parseInt($("#frequency").val().trim());
      //var storeMins = $("<td>").text(minutesAway).val().trim();
    

      console.log(trainName, destination, trainTime, frequency);

      var train = {
        TrainName: trainName,
        destination_: destination,
        TrainTime: trainTime,
        freq: frequency
        //mintues: storeMins
    }
   

    trainData.ref().push(train);  //i think just pushing it to firebase(my project)
    trainData.ref();
    //document.getElementById("train_name").text = "";
    document.getElementById('train_name').value='';
    document.getElementById('destination').value='';
    document.getElementById('frequency').value='';
    document.getElementById('train_time').value='';
});

trainData.ref().on("child_added", function(snapshot){
  console.log(snapshot.val());
  var trains = snapshot.val().TrainName;
  var DESTINATION =snapshot.val().destination_;
  var TRAINTIME = snapshot.val().TrainTime;
  //var freq_ = snapshot.val().freq;
  var frequency = snapshot.val().freq;
  //var MINS = snapshot.val().mintues;


   // Converting time with Moment.js
    // Subtracting 1 year from the time variable to not overlap the current time variable
    var timeConverted = moment(TRAINTIME, "hh:mm").subtract(1, "years");
    // Current time
    var currentTime = moment();
    console.log("The current time is: " + moment(currentTime).format("hh:mm"));
    // Difference between the current time and the time variable
    var difference = moment().diff(moment(timeConverted), "minutes");
    // Remainder of the difference and frequency
    var remainder = difference % frequency;
    // Minutes until the train
    var minutesAway = frequency - remainder;
    // Calculated arrival time
    var arrivalTime = moment().add(minutesAway, "minutes");
    //var storeMins = $("<td>").text(minutesAway).val().trim();
    newRow = $("<tr>").append(
    $("<th>").text(listOfTrains++),
    $("<td>").text(trains),
    $("<td>").text(DESTINATION),
    $("<td>").text(moment(arrivalTime).format("hh:mm")),
    $("<td>").text(frequency),
    $("<td>").text(minutesAway)
  );
  $("#train-rows").append(newRow);
  /*trainData.ref().push(minutesAway);  //i think just pushing it to firebase(my project)
  trainData.ref();*/
});
$("#clear").on("click", function() {
  trainData.ref().remove();
  $("#train-rows").empty();
  
});
// update: 6:38pm have to do the firebase retreival.

