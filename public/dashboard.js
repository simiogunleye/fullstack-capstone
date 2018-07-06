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
	        <section id="body-parts" role="region">
	          <button class="bodyPart-btn">Arms</button>
	          <button class="bodyPart-btn">Core</button>
	          <button class="bodyPart-btn">Glutes</button>
	          <button class="bodyPart-btn">Legs</button>
	        </section>
	`
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

function chooseWorkout() {
	$('.dashboard-container').on('click', '.choose-btn', function(event){
		selectBodyPart();
	});
} 

function createInstructions() {
	return `
	<div class="instructions">
		<p>You can now create your own workout. <br>
		   First, select which body part you want to find exercises for one at a time,<br>
		   choose your exercises then create a name and save your workout. 
		</p>
	</div>	
	`
}

function selectBodyPart() {
	$('.dashboard-container').html(createInstructions());
	$('.dashboard-container').html(selectBodyPartScreen());
}


function createWorkout() {
	$('.dashboard-container').on('click', '.create-btn', function(event){
		selectBodyPart();
	});
}


function calendar() {
	$('body').on('click', '.accordion', function(event){ 
    	$(this).next().toggle("active").css("display", "block");
    });
    $('#calendar').html(calendarView());
}




function dashboardScreen() {
	return `
	        <section id="dashboard-choose" role="region">
	          <button class="choose-btn">Choose a Workout</button>
	          <button class="create-btn">Create a Workout</button>
	        </section>
	`
}

function showWorkoutOptions() {
	addWorkoutsToggle();
	$('.banner-pic').hide();
	$('#date').show();
	calendar();
	$('.dashboard-container').html(dashboardScreen());
}


function addWorkoutsToggle() {
	$('#calendar').on('click', '.plus', function(event) {
		$('.dashboard-container').toggle();
	});
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
}

$(dashboardStart());