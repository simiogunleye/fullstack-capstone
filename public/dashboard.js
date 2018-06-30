function selectBodyPartScreen() {
	return `
		<div class="dashboard">
	        <section id="body-parts" role="region">
	          <button class="bodyPart-btn">Arms</button>
	          <button class="bodyPart-btn">Core</button>
	          <button class="bodyPart-btn">Glutes</button>
	          <button class="bodyPart-btn">Legs</button>
	        </section>
      	</div> 

	`
}

function dashboardScreen() {
	return `
		<div class="dashboard">
	        <section id="dashboard-choose" role="region">
	          <button class="choose-btn">Choose a Workout</button>
	          <button class="create-btn">Create a Workout</button>
	        </section>
      	</div> 
	`
}



function chooseWorkout() {
	console.log('working2');
	$('.choose-btn').click(function(event){
		selectBodyPart();
	});
} 

function createWorkout() {
	console.log('working3');
	$('.create-btn').click(function(event){
		selectBodyPart();
	});
}

function selectBodyPart() {
	console.log('working');
	$('.container').html(selectBodyPartScreen());
}

function showWorkoutOptions() {
	$('.container').html(dashboardScreen());
}


function signUp() {
	$('.submit-btn').click(function(event){
		//go to dashboard to select workouts
		showWorkoutOptions();
		
	});
}





function dashboardStart() {
	signUp();
	//selectBodyPart();
	chooseWorkout();
	createWorkout();
}


dashboardStart();