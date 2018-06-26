const mock_data = {

  "exercises": [
    {
      name: "crunches",
      description: "Lay on your back then sit up",
      group: "abs",
      _id: "1"
    },
    {
      name: "crunches2",
      description: "Lay on your back then sit up",
      group: "abs",
      _id: "2"
    } 
  ],

  "workoutTypes": [
    {
      name: "core",
      exercises: ['1', '2']
    },
    {
      name: "arms",
      exercises: ['2', '4']
    }
  ],

  "workouts": [
    {
      date: "06/18/2018",
      _id: "12345",
      setsAndReps: [{"1": {1: 10, 2: 15, 3: 12}}, {"2": {1: 10, 2: 15}}]
    },
    {
      date: "06/25/2018",
      _id: "54321",
      setsAndReps: [{"1": {1: 10, 2: 15, 3: 12}}, {"2": {1: 10, 2: 15}}]
    }
  ],

  "users": [
    {
      username: "user1",
      workout: ["12345", "6789"]
    },
    {
      username: "user2",
      workout: ["1", "2"]
    }
    
  ]

};

function getData(callback) {
  setTimeout(function(){callback(mock_data)}, 100);
}

function displayWorkoutTypes(data) {
  const workoutTypes = data['workoutTypes'];
  for (let i=0; i < workoutTypes.length; i++ ) {
    $('body').append(
      '<p>' + workoutTypes[i].name + '</p>');
  }
}

function displayExercises(data) {
  const exercises = data['exercises'];
  for (let i=0; i < exercises.length; i++) {
    $('body').append(
      '<p>' + exercises[i].name + ' - ' + exercises[i].description + '<p>');
  }
}

function getAndDisplay(callback) {
  getData(displayWorkoutTypes);
  getData(displayExercises);
}

$(function() {
  getAndDisplay();
});