var submitButton = document.getElementById('submit-button');




function createWorkout() {

   let stepsInput = document.getElementById("steps").value;
   let ageInput = document.getElementById("userAge").value;
   let runTimetInput = document.getElementById("runTime").value;
   let stretchInput = document.getElementById("stretch").value;


   console.log("steps", stepsInput);
   console.log("userAge", ageInput);
   console.log("runTime", runTimetInput);
   console.log("stretch", stretchInput);

   // Workout Splits

   let firstDay = [
      "Jumping Jacks: " + (.8 * stepsInput),
      "Incline Dumbell Press, 4x15: " + (.25 * stepsInput),
      "Incline Dumbell Flyes, 4x15: " + (.15 * stepsInput),
      "Hammer Strength Decline Press, 4x10: " + (.4 * stepsInput),
      "Hammer Strength Pec Flyes, 4x12: " + (.5 * stepsInput)
   ];

   let secondDay = [
      "Barbell Squat, 4x8: " + (.8 * ageInput),
      "Leg Extensions, 4x12: " + (.5 * ageInput),
      "Hack Squat, 4x10: " + (.9 * ageInput),
      "Goblet Squats, 4x15: " + (.2 * ageInput),
      "Seated Calf Raises, 4x15: " + (.15 * ageInput),
   ]

   let thirdDay = [
      "T Bar Rows, 4x12: " + (.65 * runTimetInput),
      "Lat Pull Downs, 4x12: " + (.5 * runTimetInput),
      "Seated Cable Rows, 4x8: " + (.5 * runTimetInput),
      "Barbell Shrugs, 4x12: " + (.7 * runTimetInput),
      "Underhand Barbell Rows, 4x10: " + (.58 * runTimetInput)
   ]

   let fourthDay = [
      "Barbell Bicep Curls, 4x12: " + (.5 * stretchInput),
      "Overhead Tricep Extension, 4x10: " + (.6 * stretchInput),
      "Tricep Cable Pushdowns, 4x12: " + (.4 * stretchInput),
      "Bicep Cable Curls, 4x12: " + (.5 * stretchInput),
      "Preacher Curls, 4x10: " + (.65 * stretchInput),
   ]

   let restDay = [
      "Rest Day/Active Recovery"
   ]


// Workout Header
   var workoutTitle = document.getElementById("split-title");
   var text = document.createTextNode("Your Custom Cardio Workout:");
      workoutTitle.appendChild(text);


//-------------------------------------------Monday--------------------------------------------------------
   
   var mon = document.getElementById("mon");
   var monText = document.createTextNode("Monday:");
      mon.appendChild(monText);

      let monSplit = document.querySelector("#mon-plan")
      let chestWo = firstDay.map(firstDay => {
         let li = document.createElement("li");
         li.textContent = firstDay;
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
      let legWo = secondDay.map(secondDay => {
         let li = document.createElement("li");
         li.textContent = secondDay;
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
      let armWo = thirdDay.map(thirdDay => {
         let li = document.createElement("li");
         li.textContent = thirdDay;
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
      let backWo = fourthDay.map(fourthDay => {
         let li = document.createElement("li");
         li.textContent = fourthDay;
         return li;
      });
      sunSplit.append(... backWo);
}









submitButton.addEventListener('click', createWorkout);