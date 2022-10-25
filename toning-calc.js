var submitButton = document.getElementById('submit-button');




function createWorkout() {

   let benchPress = document.getElementById("bench").value;
   let squatInput = document.getElementById("squat").value;
   let deadliftInput = document.getElementById("deadlift").value;
   let curlInput = document.getElementById("curl").value;


   console.log("bench-press", benchPress);
   console.log("squat", squatInput);
   console.log("deadlift", deadliftInput);
   console.log("curl", curlInput);

   // Workout Splits

   let chestDay = [
      "Incline Barbell Bench Press, 4x15: " + (.6 * benchPress) + ("lbs"),
      "Dumbell Press, 4x15: " + (.23 * benchPress) + ("lbs"),
      "Incline Dumbell Flyes, 4x15: " + (.15 * benchPress) + ("lbs"),
      "Dumbbell Pullovers Press, 4x15: " + (.4 * benchPress) + ("lbs"),
      "Incline Cable Flyes, 4x12: " + (.2 * benchPress) + ("lbs")
   ];

   let legDay = [
      "Barbell Front Squats, 4x15: " + (.5 * squatInput) + ("lbs"),
      "Leg Curls, 4x12: " + (.4 * squatInput) + ("lbs"),
      "Jump Squats, 4x20: " + ("Bodyweight"),
      "Goblet Squats, 4x15: " + (.2 * squatInput) + ("lbs"),
      "Dumbbell Lunges, 4x15: " + (.18 * squatInput) + ("lbs"),
   ]

   let backDay = [
      "Reverse Pec Deck Flyes, 4x15: " + (.2 * deadliftInput) + ("lbs"),
      "Lat Pull Downs, 4x15: " + (.38 * deadliftInput) + ("lbs"),
      "Seated Cable Rows, 4x15: " + (.45 * deadliftInput) + ("lbs"),
      "Barbell Shrugs, 4x12: " + (.7 * deadliftInput) + ("lbs"),
      "Underhand Barbell Rows, 4x15: " + (.38 * deadliftInput) + ("lbs"),
   ]

   let armDay = [
      "Barbell Bicep Curls, 4x12: " + (.5 * curlInput) + ("lbs"),
      "Overhead Tricep Extension, 4x15: " + (.6 * curlInput) + ("lbs"),
      "Diamond Pushups, 4x20: " + ("Bodyweight"),
      "Dumbbell Hammer Curls, 4x15: " + (.45 * curlInput) + ("lbs"),
      "Seated Dumbbell Curls, 4x12: " + (.35 * curlInput) + ("lbs"),
   ]

   let restDay = [
      "Rest Day/Active Recovery"
   ]


// Workout Header
   var workoutTitle = document.getElementById("split-title");
   var text = document.createTextNode("Your Custom Toning Workout:");
      workoutTitle.appendChild(text);


//-------------------------------------------Monday--------------------------------------------------------
   
   var mon = document.getElementById("mon");
   var monText = document.createTextNode("Monday:");
      mon.appendChild(monText);

      let monSplit = document.querySelector("#mon-plan")
      let chestWo = chestDay.map(chestDay => {
         let li = document.createElement("li");
         li.textContent = chestDay;
         return li;
      });
      monSplit.append(... chestWo);

//-------------------------------------------Tuesday---------------------------------------------------------
   
   var tues = document.getElementById("tues");
   var tuesText = document.createTextNode("Tuesday:");
      tues.appendChild(tuesText);

      let tuesSplit = document.querySelector("#tues-plan")
      let tuesWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;
      });
      tuesSplit.append(... tuesWo);

// -------------------------------------------Wednesday---------------------------------------------------------
   
   var wed = document.getElementById("wed");
   var wedText = document.createTextNode("Wednesday:");
      wed.appendChild(wedText);

      let wedSplit = document.querySelector("#wed-plan")
      let legWo = legDay.map(legDay => {
         let li = document.createElement("li");
         li.textContent = legDay;
         return li;
      });
      wedSplit.append(... legWo);

// ------------------------------------------Thursday-----------------------------------------------------------


   var thr = document.getElementById("thr");
   var thrText = document.createTextNode("Thursday:");
      thr.appendChild(thrText);

      let thrSplit = document.querySelector("#thr-plan")
      let thrWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;

      });
      thrSplit.append(... thrWo);

// -----------------------------------------Friday----------------------------------------------------------------------

   var fri = document.getElementById("fri");
   var friText = document.createTextNode("Friday:");
      fri.appendChild(friText);

      let friSplit = document.querySelector("#fri-plan")
      let armWo = armDay.map(armDay => {
         let li = document.createElement("li");
         li.textContent = armDay;
         return li;
      });
      friSplit.append(... armWo);

//-----------------------------------Saturday-----------------------------------------------------------------------------

   var sat = document.getElementById("sat");
   var satText = document.createTextNode("Saturday:");
      sat.appendChild(satText);

      let satSplit = document.querySelector("#sat-plan")
      let satWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;

      });
      satSplit.append(... satWo);
   
//-----------------------------------Sunday-----------------------------------------------------------------------------

   var sun = document.getElementById("sun");
   var sunText = document.createTextNode("Sunday");
      sun.appendChild(sunText);

      let sunSplit = document.querySelector("#sun-plan")
      let backWo = backDay.map(backDay => {
         let li = document.createElement("li");
         li.textContent = backDay;
         return li;
      });
      sunSplit.append(... backWo);
}









submitButton.addEventListener('click', createWorkout);