var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
document.getElementById("date").innerHTML = date;


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

function dashboardScreen() {
	return `
	        <section id="dashboard-choose" role="region">
	          <button class="choose-btn">Choose a Workout</button>
	          <button class="create-btn">Create a Workout</button>
	        </section>
	`
}

function calendarView() {
	return `
	<div class="weekOf">July</div>
    <button class="accordion">Sunday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>

    <button class="accordion">Monday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>

    <button class="accordion">Tuesday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>

    <button class="accordion">Wednesday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>

    <button class="accordion">Thursday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>

    <button class="accordion">Friday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>

    <button class="accordion">Saturday</button>
      <div class="panel">
        <p>Workouts added...</p>
      </div>
	`
}

function chooseWorkout() {
	console.log('working2');

	$('.dashboard-container').on('click', '.choose-btn', function(event){
		selectBodyPart();
	});
} 

function createWorkout() {
	console.log('working3');
	$('.dashboard-container').on('click', '.create-btn', function(event){
		selectBodyPart();
	});
}

function selectBodyPart() {
	console.log('working');
	$('.dashboard-container').html(selectBodyPartScreen());
}

function showWorkoutOptions() {
	$('.dashboard-container').show();
	$('.banner-pic').hide();
	$('#date').show();
	//work here
	//$('#calendar').html(calendarView());
	calendar();
	$('.dashboard-container').html(dashboardScreen());
}

function calendar() {
	let acc = document.getElementsByClassName("accordion");
	let i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].addEventListener("click", function() {
	        /* Toggle between adding and removing the "active" class,
	        to highlight the button that controls the panel */
	        this.classList.toggle("active");

	        /* Toggle between hiding and showing the active panel */
	        let panel = this.nextElementSibling;
	        if (panel.style.display === "block") {
	            panel.style.display = "none";
	        } else {
	            panel.style.display = "block";
	        }
	    });
}
$('#calendar').html(calendarView());

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