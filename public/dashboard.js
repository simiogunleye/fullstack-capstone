const exercises_url = "/api/exercises";
const workouts_url = "/api/workouts";

function getExerciseData(callback) {
	console.log("Retrieving exercises")
	$.getJSON(exercises_url, callback)
};

function displayExercises(data) {
	for (let i = 0; i < data.length; i++) {
		let category = data[i].category;
		console.log(category);
	}
};

function watchExercises() {
	getExerciseData(displayExercises);
	getWorkoutData(displayWorkouts);
};

function getWorkoutData(callback) {
	console.log("Retrieving workouts") 
	$.getJSON(workouts_url, callback)
};

function displayWorkouts(workouts) {
	console.log(workouts);
};




let today = new Date(); //current date
let first = today.getDate() - today.getDay();
let last = first + 6

let firstDay = new Date(today.setDate(first)).toUTCString();
let lastDay = new Date(today.setDate(last)).toUTCString();
//let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
let date = firstDay + '-' + lastDay;
//document.getElementById("date").innerHTML = date;

/*2*/function generateHTMLWorkoutTypesScreen() {
	// populated list of workoutTypes
	return `
		<div class="instructions">
			<p>
				You can now create your own workout.
			    Select which body part you want to find exercises for,
			    choose your exercises, then create a name and save your workout.
			</p>
		</div>
		<div class="workout-name-form-container">
          <form class= "workout-name-form">
            <fieldset class="workout">
              <label for="workout-name" required></label>
              <input type="text" name="workout-name" class="workout-name" placeholder="Name your workout...">
              <button class="save-btn" type="submit">Save</button>
            </fieldset>
          </form>
        </div>
        <section class="workout-types-container" role="region">
        </section>`;
};

/*1*/function renderWorkoutTypesScreen() {
	console.log('got here');
	$('.dashboard-container').html(generateHTMLWorkoutTypesScreen());
	renderWorkoutTypes();
};

/*6*/function renderWorkoutTypeExercises(workoutType) {
	$('.dashboard-container').html(generateHTMLWorkoutTypeExercisesScreen(workoutType));
	workoutTypeExercises(workoutType);
};

/*7*/function generateHTMLWorkoutTypeExercisesScreen(workoutType) {
	return `
		<div class="workout-type-exercises">
			<h3>${workoutType}</h3>
			<section class="choose-exercises-container" role="region">
			</section>
			<div class="back-link">
				<a class="back-to-body" href="#" onclick="history.go(-1)">Choose another body part</a>
			</div>	
		</div>`;
}

//render the exercises
function workoutTypeExercises(workoutType) {
	exercisesAndTypes[workoutType].forEach(exercise => {
		$('.choose-exercises-container').append(generateExercise(exercise.name));
	})
};

// render the workout types
/*3*/function renderWorkoutTypes(data) {
	console.log('data workouts' + data.category);
	data.forEach(category => {
		$('.workout-types-container').append(generateHTMLWorkoutType(data.category));
	});
	$('.workout-types-container').append(`<button class="save-workout-btn" type="submit">Save Workout</button>`);
};

/*4*/function generateHTMLWorkoutType(workoutType) {
	return `
		<button class="workout-type-button">${workoutType}</button>`;
};



function generateExercise(exercise) {
	return `
		<button class="exercise-button">${exercise}</button>;
	`
}

// render the exercises per workout type

// attach the event handlers

/*5*/function handleClickWorkoutType() {
	$('.dashboard-container').on('click', '.workout-type-button', function(event) {
		const workoutType = $(this).text();
		console.log('handle click ' + workoutType);
		renderWorkoutTypeExercises(workoutType);
	});
};


function renderWorkoutScreen() {
	return `
		<div class="workout-choices">
			<h2>Choose your workout</h2>
			<h3><a href="#" class=workout-choice-name>Total Body</a></h3>
				<ul>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
				</ul>
			<h3><a href="#" class=workout-choice-name>Muscle Building</a></h3>
				<ul>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
				</ul>
			<h3><a href="#" class=workout-choice-name>High Intensity Interval Training</a></h3>
				<ul>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
					<span><li>exercise</li></span>
				</ul>
		</div>`;
};

function chooseWorkout() {
	$('.dashboard-container').on('click', '.choose-btn', function(event){
		hideCalendar();
		$('.dashboard-container').html(renderWorkoutScreen());
	});
}


function createWorkout() {
	$('.dashboard-container').on('click', '.create-btn', function(event){
		hideCalendar();
		renderWorkoutTypesScreen();
	});
}


function calendarView() {
	return `
	<div class="weekOf">${date}</div>
    <button class="accordion">Sunday <a href="#" class="plus">+</a></button>
    <div class="panel">
        <p>Workouts added...</p>
    </div>
    <button class="accordion">Monday <a href="#" class="plus">+</a></button>
    <div class="panel">
       <p>Workouts added...</p>
    </div>
    <button class="accordion">Tuesday <a href="#" class="plus">+</a></button>
	<div class="panel">
	  <p>Workouts added...</p>
	</div>
    <button class="accordion">Wednesday <a href="#" class="plus">+</a></button>
    <div class="panel">
      <p>Workouts added...</p>
    </div>
    <button class="accordion">Thursday <a href="#" class="plus">+</a></button>
    <div class="panel">
      <p>Workouts added...</p>
    </div>
    <button class="accordion">Friday <a href="#" class="plus">+</a></button>
    <div class="panel">
      <p>Workouts added...</p>
    </div>
    <button class="accordion">Saturday <a href="#" class="plus">+</a></button>
    <div class="panel">
      <p>Workouts added...</p>
    </div>
	`
}


function calendar() {
	$('body').on('click', '.accordion', function(event){
    	$(this).next().toggle("active").css("display", "block");
    });
    $('#calendar').html(calendarView());
}

function hideCalendar() {
	$('#calendar').hide();
}


function dashboardScreen() {
	return `
	        <section id="dashboard-choose" role="region">
	          <button class="choose-btn">Choose a Workout</button>
	          <button class="create-btn">Create a Workout</button>
	        </section>
	`
}

function addWorkoutsToggle() {
	$('#calendar').on('click', '.plus', function(event) {
		$('.dashboard-container').toggle();
	});
}

function showWorkoutOptions() {
	addWorkoutsToggle();
	$('.banner-pic').hide();
	$('#date').show();
	calendar();
	$('.dashboard-container').html(dashboardScreen());
}

function hideForm() {
	$('.form-container').hide();
}

function signUp() {
	$('.banner-pic').show();
	$('#date').hide();
	$('.signup-form').on('submit', function(event){
		event.preventDefault();
		hideForm();
		showWorkoutOptions();

	});
}

function dashboardStart() {
	signUp();
	chooseWorkout();
	createWorkout();
	//renderWorkoutTypes();
	handleClickWorkoutType();
	watchExercises();
}

$(dashboardStart());