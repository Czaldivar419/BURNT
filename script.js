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
      "Barbell Bench Press, 4x12: " + (.8 * benchPress) + ("lbs"),
      "Incline Dumbell Press, 4x15: " + (.25 * benchPress) + ("lbs"),
      "Incline Dumbell Flyes, 4x15: " + (.15 * benchPress) + ("lbs"),
      "Hammer Strength Decline Press, 4x10: " + (.4 * benchPress) + ("lbs"),
      "Hammer Strength Pec Flyes, 4x12: " + (.5 * benchPress) + ("lbs")
   ];

   let legDay = [
      "Barbell Squat, 4x8: " + (.8 * squatInput) + ("lbs"),
      "Leg Extensions, 4x12: " + (.5 * squatInput) + ("lbs"),
      "Hack Squat, 4x10: " + (.9 * squatInput) + ("lbs"),
      "Goblet Squats, 4x15: " + (.2 * squatInput) + ("lbs"),
      "Seated Calf Raises, 4x15: " + (.15 * squatInput) + ("lbs"),
   ]

   let backDay = [
      "T Bar Rows, 4x12: " + (.65 * deadliftInput) + ("lbs"),
      "Lat Pull Downs, 4x12: " + (.5 * deadliftInput) + ("lbs"),
      "Seated Cable Rows, 4x8: " + (.5 * deadliftInput) + ("lbs"),
      "Barbell Shrugs, 4x12: " + (.7 * deadliftInput) + ("lbs"),
      "Underhand Barbell Rows, 4x10: " + (.58 * deadliftInput) + ("lbs"),
   ]

   let armDay = [
      "Barbell Bicep Curls, 4x12: " + (.5 * curlInput) + ("lbs"),
      "Overhead Tricep Extension, 4x10: " + (.6 * curlInput) + ("lbs"),
      "Tricep Cable Pushdowns, 4x12: " + (.4 * curlInput) + ("lbs"),
      "Bicep Cable Curls, 4x12: " + (.5 * curlInput) + ("lbs"),
      "Preacher Curls, 4x10: " + (.65 * curlInput) + ("lbs"),
   ]

   let restDay = [
      "Rest Day/Active Recovery"
   ]


// Workout Header
   var workoutTitle = document.getElementById("split-title");
   var text = document.createTextNode("Your Custom Workout:");
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