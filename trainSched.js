 // Initialize Firebase
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
    trainData.ref()

  })


