const exercisesAndTypes = {

   "Arms": [
	  {
	    name: "Hammer Curl",
	    description: "Hold a dumbbell in each hand with palms facing your sides and arms extended straight down. Keeping your upper arms against your sides, curl both weights at the same time, minimizing momentum used during the curl."
	  },
	  {
	    name: "Dip",
	    description: "Use dip bars, if available, or place your palms on a bench, chair, or on the floor as you extend your legs in front of you. Lower your body until your upper arms are parallel to the floor, but no lower. Extend your elbows to come up."
	  },
	  {
	    name: "Close-Grip Curl",
	    description: "Curl with your hands inside shoulder width, in the middle of the bar"
	  },
	  {
	    name: "Chinup",
	    description: "Grab the bar (or slightly inside) shoulder width, with a supinated grip. While keeping your core tight, pull yourself up until your chin is over the bar."
	  },
	  {
	    name: "Suspension Trainer Triceps Extension",
	    description: "Lengthen the straps and stand underneath the suspension trainer’s anchor point. Lean your weight forward and bend your elbows so you feel a stretch in your triceps. Your palms should face each other behind your head. Keeping your body straight and abs braced, extend elbows, rotating palms so they face down while extended."
	  },
	  {
	    name: "Diamond Pushup",
	    description: "Get into pushup position but place your hands close together so your thumbs and index fingers touch. Keeping your body in a straight line with abs braced, lower your torso until your chest is just above the floor, then press back up."
	  },
	  {
	    name: "Neutral-Grip Triceps Extension",
	    description: "Lie back on a bench or the floor holding a dumbbell in each hand with palms facing each other. Press the weights over your chest, then bend your elbows to lower the weights toward your face until you feel a stretch in your triceps. Extend your elbows. Keep your elbows facing the ceiling the entire set."
	  },
	  {
	    name: "Poundstone Curl",
	    description: "Grasp the barbell at shoulder width. Keeping your upper arms at your sides, curl the bar."
	  },
	  {
	    name: "Suspension Trainer Rotational Inverted Row",
	    description: "Hold the handles and lean back with arms extended so that your body is supported by the suspension trainer and only your feet are on the floor. Brace your core and hold your body in a straightline. (The lower you set the handles, the harder the exercise; you can elevate your feet to make it even more difficult.) Start with your palms facing your feet, and as you row your body up, twist your wrists out so your palms face up in the top position."
	  },
	  {
	    name: "Suspension Trainer Biceps Curl",
	    description: "Face the trainer's attachment point and grasp the handles with palms facing up. Lean back with your abs braced, body straight, and arms extended in front of you. Curl your body up to the handles."
	  }
	],

	"Core": [
	  {
	    name: "Unicorn",
	    description: "Sit on the bench with your feet on the floor and your knees slightly bent. Grip the bench behind you, leaning back slightly. Keeping your core braced, lift both legs as high as you can. Return to the starting position, and repeat."
	  },
	  {
	    name: "C-Sit Tap",
	    description: "Sit with your butt and heels on the floor, your knees bent slightly,and your arms extended in front of you, palms up. Keeping your core braced, lean back slightly, and rotate to your right as you reach back with your right arm to touch the floor behind you. Return to the starting position and repeat to your left. Continue alternating sides."
	  },
	  {
	    name: "Seated Rainbow",
	    description: "Sit on a bench, gripping it behind you with your hands. Brace your core, lean back slightly, and raise your feet off the ground so that your hips are bent 90 degrees. Rotate left as you lower your legs and touch the floor with your toes. Reverse directions, drawing an arc/rainbow in the air as you rotate to your right and tap the floor again. Continue alternating sides."
	  },
	  {
	    name: "Bicycle Crunch and Punch",
	    description: "Sit on the floor with your legs straight and your guard up. Brace your core, lean back slightly, and raise your legs off the ground. Simultaneously draw your left knee toward your chest, extend your right leg, and punch across your body with your right hand. Switch sides, bringing your right arm back, drawing your right knee towards your chest, extending your left leg, and punching across your body with your left hand. Continue alternating sides. Too difficult? Touch the floor with the heel of your extended leg instead of keeping it elevated during each punch."
	  },
	  {
	    name: "C-Sit Scissor",
	    description: "Assume the same starting position as the rainbow tap, but elevate your heels a few inches off the floor. Keeping your core braced and back as flat as possible, raise your right leg. Simultaneously lower your right leg and raise your left leg in a scissor-like motion. Continue alternating legs without letting your heels touch the ground."
	  },
	  {
	    name: "Forearm Run",
	    description: "Assume a plank position with your weight on your forearms, your elbows below your shoulders, and your body straight from head to heels. Keeping your back flat, bring your right knee towards your chest. Return to the starting position, and repeat with your left leg. Continue alternating legs."
	  },
	  {
	    name: "Elevated Bird Dog Crunch",
	    description: "Assume a plank position with your forearms elevated on a bench or stable surface of a similar height. Keeping your back flat and core braced, extend your left arm in front of you and your right leg behind you. Bring them in, touching your left elbow to your right knee. Return to the starting position, and repeat with your right arm and left leg. Continue alternating sides."
	  },
	  {
	    name: "Straight-Arm Plank Cross",
	    description: "Assume a push-up position with your arms straight, hands in line with and slightly wider than your shoulders, and your body straight from head to heels. Lift your right foot off the ground, and bend your right knee as you cross it under your body to touch your left arm. Return to the starting position, and repeat with your other leg, bringing your left knee to your right arm. Continue alternating sides."
	  },
	  {
	    name: "Side Plank Wing",
	    description: "Lie on your right side, propping yourself up on your right forearm and lifting your hips so that your body forms a straight line from head to heels. Place the fingertips of your left hand lightly behind your left ear. Lower your right hip to the floor, and then return to the starting position. Bend your left knee and touch it to your left elbow as you contract your abs. Return to the starting position and repeat the entire sequence. Switch sides halfway through each set."
	  },
	  {
	    name: "Mountain Climber with Push-Up",
	    description: "Start in a push-up position with your body and arms straight, and your hands aligned with (but slightly wider than) your shoulders. Keeping your back flat, bring your knee as close to your chest possible, tapping the floor with your toes. Return to the starting position, and repeat with your left leg. Continue alternating legs. Perform one pushup after every eight reps of the mountain climber."
	  }
	],

	"Glutes": [
	  {
	    name: "Barbell Hip Thrust",
	    description: "Sit on the ground with your back against a bench, feet planted firmly in front of you, and a padded barbell in your lap. Keeping the lumbar spine and knees stable, raise the barbell by extending your hips, making sure to push the hips upward using the glutes. Rise until your body forms a straight line from your shoulders to your knees, and then slowly descend back to the ground."
	  },
	  {
	    name: "Glute and Hamstring Extension",
	    description: "Start standing, leaning forward on a back extension pad, with your toes turned out, knees bent (like a frog). Keeping your back flat, bend at your hips as far down as possible. To come up, push your thighs into the pad and squeeze your glutes, keeping your back straight the entire time. At the top, give your glutes an extra squeeze. Use a controlled tempo during the exercise: aim for a 2-3 second count on the way down, 1-2 seconds on the way up."
	  },
	  {
	    name: "Lunge with Arm Reach",
	    description: "Stand tall with feet approximately hip-width apart and arms extended at chest height. Step forward with your right foot. As your weight comes down on your right leg, lean forward at your waist and reach with both hands at approximately knee height. Return to standing by pushing the right foot into the ground and driving the body back to the starting position. That's one rep. Repeat 6-10 times on the right leg, then do the same number on the left leg."
	  },
	  {
	    name: "The Step-Up",
	    description: "Stand upright with one foot on a bench or step, holding dumbbells by your sides with your arms straight. Push off your top foot and step up onto the bench (or step) with both feet. Step down onto one foot, keeping the other foot on the bench and repeat. Do 3 sets of 10-12 reps on each leg."
	  },
	  {
	    name: "Floor Jacks",
	    description: "Lie facedown on the floor or mat. Extend your arms and legs into an 'X' shape and then do 'jumping jacks' in this position (no actual jumping involved). Do 3 sets of 30 seconds."
	  },
	  {
	    name: "Uni-Leg Chair Squat",
	    description: "Start by sitting close to the edge of a chair with arms crossed, chest lifted, right foot solidly on the floor, and left leg elevated about 8 inches. Engage your abs and lean your torso slightly forward to prepare to stand. Dig your right heel firmly into the exercise mat (or floor), shift glutes backward (as you do in a regular squat), and straighten you right knee not quite to full extension while squeezing up on your glutes. Hold your left leg up off the mat and balance for 3 counts. Lower slowly and repeat. Do 2-4 sets of 10 reps on each leg."
	  },
	  {
	    name: "Quadruple Hip Extensions",
	    description: "Start on your hands and knees (quadruped position) with your knees below your hips and your wrists below your shoulders, fingers pointing forward. Keeping the core muscles engaged, slowly lift the left leg. Your knee should stay bent as you press your foot up toward the ceiling."
	  },
	  {
	    name: "Lunge Jump",
	    description: "Stand tall with your feet shoulder-width apart. Step your right leg back into a reverse lunge, going as low as you can while keeping your back straight and making sure your left knee doesn't go too far past the toe. Hold this lunge position for a 3 count then drive your right knee forward and upward."
	  },
	  {
	    name: "Booty Blaster",
	    description: "Stand at a chair, barre, or sturdy countertop. Place you forearm down on the barre and bend both knees. Keeping your knee bent, lift your outside leg behind your body until your thigh is almost parallel to the floor. Place the outside hand on the supporting thigh and resist as you extend the spine. Lift your raised leg up and down in small pulses, keeping the hip elevated to focus deep into the glutes. Do 2 sets of 20 small pulses on each leg." 
	  },
	  {
	    name: "Heavy Barbell Squat", 
	    description: "Stand with your feet slightly wider than hip distance, toes slightly turned out.  Leading with your hips, lower your butt down to hip level, then stand up."
	  }
    ],
 
 	"Legs": [
	  {
	    name: "Single Leg Squat",
	    description: "Stand and lift your right foot a few inches off the floor, so it rests by your left ankle. Keeping your right foot elevated, dip your left knee and swing your arms behind you, as if prepping for a jump. Swing your arms forward and up, exploding off the floor with your left foot. Land softly on your left foot, keeping your right foot elevated, and repeat."
	  },
	  {
	    name: "Attitude", 
	    description: "Stand tall, hands on your hips, with your heels together and your toes turned out slightly. Move your right foot back, lightly touching the floor behind you with your big toe and letting your heel drop slightly inward. This is your starting position. Keeping your torso tall, lift your right leg behind you as high as you can, squeezing your right glute. Return to the starting position, gently tapping the toes of your right foot to the floor, and repeat."
	  },
	  {
	    name: "Holmsen Screamer Lunge",
	    description: "Step back into a reverse lunge with your right leg, toes pointed forward, left foot flat, ball of your right foot on the floor. Your right arm should be forward and your left arm back. This is the starting position. Drive your right knee up and forward explosively, jumping into the air as high as possible while keeping your left leg straight and switching the position of your arms, so that your left arm is now forward. Land softly on your left leg and return to the starting position."
	  },
	  {
	    name: "Step Up Convicts",
	    description: "Stand facing a knee-high platform (like a box, bench, or step) holding a pair of dumbbells at your sides. Keeping your feet parallel and your torso upright, step your right leg back into a lunge. This is the starting position. Without letting your right foot touch the floor, push back up into a standing position, and then step up onto the bench using your right leg, bending your left knee and raising it as high as you can in front of you. Reverse the movement to return to the starting position."
	  },
	  {
	    name: "Plyo Frog Squats",
	    description: "Stand with your feet slightly wider than shoulder-distance apart, feet turned out. Keeping your chest up and your lower back flat, push your hips back to squat down as low as possible, touching the floor between your feet with your fingertips if you can. Swing your arms forward and up as you jump as high as possible. Land softly, and immediately drop back down into the squat to begin your next rep"
	  },
	  {
	    name: "Side Lunge",
	    description: "Stand upright with your feet hip-width apart, holding a pair of dumbbells at your sides. This is the starting position. Keeping your feet parallel and your core tight, take a large step to your right with your right foot. Keeping your left leg straight, chest up, and back flat, lower the dumbbells to either side of your right leg as you bend your right knee and lower your body until your right thigh is parallel to the floor. Reverse the movement to return to the starting position."
	  },
	  {
	    name: "Curtsey Lunge Sledgehammer",
	    description: "Stand upright, feet hip-width apart, holding a sandbag or dumbbell in both hands above your right shoulder. This is the starting position. Step back with your right foot, crossing it behind your left leg as you simultaneously lower your body as far as you can toward the ground and the weight across your body to the outside of your left leg. Return to the starting position, and repeat."
	  },
	  {
	    name: "Pistol Squat",
	    description: "Stand in front of a stable, knee-high platform (like a bench or box) facing away from it, holding one dumbbell with both hands in front of your chest. Extend your right leg straight in front of you with your toes up and heel a few inches off the floor. Keeping your chest up, push your hips back and lower your butt onto the bench. Return to the starting position without letting your right foot touch the floor."
	  },
	  {
	    name: "Bulgarian Split Squat Jump",
	    description: "Stand a couple of feet in front of a stable, knee-high platform (like a bench or box), facing away from it. Place the ball of your left foot on the bench. This is the starting position. Lower your body until your rear knee is a few inches from the floor, and then push up explosively with your right leg, raising your right knee as high as possible as you propel yourself into the air. Land softly, and then immediately drop down into a squat to begin your next rep."
	  },
	  {
	    name: "Calf Raise Bridge",
	    description: "Lie on your back with your legs bent and your feet flat on the floor about hip-width apart, holding a pair of dumbbells on your hips. This is the starting position. Lift your hips as high as possible, squeezing your glutes as you rise up on the balls of your feet. Reverse the movement to return to the starting position."
	  }
 	]

}; 

const mockData = {

  "exercises": [
    {
      name: "crunches",
      description: "Lay on your back then sit up",
      _id: "1"
    },
    {
      name: "crunches2",
      description: "Lay on your back then sit up",
      _id: "2"
    }
  ],

  
  "workouts": [
    {
      workoutName: "Muscle Builder",
	  exercises: ["1", "2"],
	  created: "7/27/2018",
	  date: Date
    },
    {
      workoutName: "Weight Loss",
	  exercises: ["1", "2"],
	  created: "7/23/2018",
	  date: "7/28/2018"
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
			<a class="back-to-body" href="#">Choose another body part</a>
		</div>`;
}

//render the exercises
function workoutTypeExercises(workoutType) {
	exercisesAndTypes[workoutType].forEach(exercise => {
		$('.choose-exercises-container').append(generateExercise(exercise.name));
	})
};

// render the workout types
/*3*/function renderWorkoutTypes() {
	console.log('data workouts' + mockData.workoutTypes);
	mockData.workoutTypes.forEach(workoutType => {
		$('.workout-types-container').append(generateHTMLWorkoutType(workoutType.name));
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
}

$(dashboardStart());