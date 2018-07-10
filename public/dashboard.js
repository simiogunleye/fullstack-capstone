let today = new Date(); //current date
let first = today.getDate() - today.getDay(); 
let last = first + 6

let firstDay = new Date(today.setDate(first)).toUTCString();
let lastDay = new Date(today.setDate(last)).toUTCString();
//let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
let date = firstDay + '-' + lastDay;
//document.getElementById("date").innerHTML = date;





function selectBodyPartScreen() {
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
		<div class="bodyPartsContainer">
	        <section id="body-parts" role="region">
	          <button class="arms-bodyPart-btn">Arms</button>
	          <button class="core-bodyPart-btn">Core</button>
	          <button class="glutes-bodyPart-btn">Glutes</button>
	          <button class="legs-bodyPart-btn">Legs</button>
	          <button class="save-workout-btn" type="submit">Save Workout</button>
	        </section>
        </div>
	`
}

function selectBodyPart() {
	$('.dashboard-container').html(selectBodyPartScreen());
}


function armsScreen() {
	return `
		<div class="exerciseScreenContainer">
			<header>
				<h1>Arms</h1>
			</header>
			<section "choose-exercises">
				<button class="exercise-choice"><a href="#" class="plus">+</a>Exercise 1</button>
			</section>
			<div class="backto-bodyPart"><a href="#">Choose another body part</a></div>	
		</div>
	`
}

function coreScreen() {
	return `
		<div class="exerciseScreenContainer">
			<header>
				<h1>Core</h1>
			</header>
			<section "choose-exercises">
				<button class="exercise-choice"><a href="#" class="plus">+</a>Exercise 1</button>
			</section>
			<div class="backto-bodyPart"><a href="#">Choose another body part</a></div>	
		</div>
	`
}

function legsScreen() {
	return `
		<div class="exerciseScreenContainer">
			<header>
				<h1>Legs</h1>
			</header>
			<section "choose-exercises">
				<button class="exercise-choice"><a href="#" class="plus">+</a>Exercise 1</button>
			</section>
			<div class="backto-bodyPart"><a href="#">Choose another body part</a></div>	
		</div>
	`
}

function glutesScreen() {
	return `
		<div class="exerciseScreenContainer">
			<header>
				<h1>Glutes</h1>
			</header>
			<section "choose-exercises">
				<button class="exercise-choice"><a href="#" class="plus">+</a>Exercise 1</button>
			</section>
			<div class="backto-bodyPart"><a href="#">Choose another body part</a></div>	
		</div>
	`
}


function bodyPartExercises() {
	$('.dashboard-container').on('click', '.arms-bodyPart-btn', function(event) {
		console.log('arm button clicked');
		$('.dashboard-container').html(armsScreen());
	});

	$('.dashboard-container').on('click', '.core-bodyPart-btn', function(event) {
		console.log('core button clicked');
		$('.dashboard-container').html(coreScreen());
	});

	$('.dashboard-container').on('click', '.glutes-bodyPart-btn', function(event) {
		console.log('glutes button clicked');
		$('.dashboard-container').html(glutesScreen());
	});

	$('.dashboard-container').on('click', '.legs-bodyPart-btn', function(event) {
		console.log('legs button clicked');
		$('.dashboard-container').html(legsScreen());
	});
}

function chooseWorkoutScreen() {
	return `
		<div class="workout-choices">
			<h2>Choose your workout</h2><br>
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
		</div>

	`
}

function chooseWorkout() {
	$('.dashboard-container').on('click', '.choose-btn', function(event){
		hideCalendar();
		$('.dashboard-container').html(chooseWorkoutScreen());	
	});
} 


function createWorkout() {
	$('.dashboard-container').on('click', '.create-btn', function(event){
		hideCalendar();
		selectBodyPart();
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
	selectBodyPart();
	chooseWorkout();
	createWorkout();
	bodyPartExercises();
}

$(dashboardStart());