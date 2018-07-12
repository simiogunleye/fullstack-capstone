const mockData = {

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
      name: "Arms",
      exercises: ['1', '2']
    },
    {
      name: "Core",
      exercises: ['2', '4']
    },
    {
      name: "Glutes",
      exercises: ['1', '2']
    },
    {
      name: "Legs",
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
  ];

};

module.exports = { mockData };
