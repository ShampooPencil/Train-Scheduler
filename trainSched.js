 // Initialize Firebase
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
      console.log(trainName, destination, trainTime);

      var train = {
        TrainName: trainName,
        destination_: destination,
        TrainTime: trainTime
    }

    trainData.ref().push(train);
    trainData.ref();
});

trainData.ref().on("child_added", function(snapshot){
  console.log(snapshot.val());
  var trains = snapshot.val().TrainName;
  var DESTINATION =snapshot.val().destination_;
  var TRAINTIME = snapshot.val().TrainTime;
  var newRow = $("<tr>").append(
    $("<th>").text(listOfTrains++),
    $("<td>").text(trains),
    $("<td>").text(DESTINATION),
    $("<td>").text(TRAINTIME)
  );
  $("#train-rows").append(newRow);
});


// update: 6:38pm have to do the firebase retreival.

