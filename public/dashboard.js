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
	$('.dashboard-container').html(dashboardScreen());
}

function hideForm() {
	$('.form-container').hide();
}


function signUp() {
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