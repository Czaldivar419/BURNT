
var submitButton = document.getElementById('submit-button');


function createWorkout() {

   let stepsInput = document.getElementById("steps").value;
   let ageInput = document.getElementById("userAge").value;
   let runTimeInput = document.getElementById("runTime").value;
   let stretchInput = document.getElementById("stretch").value;


   console.log("steps", stepsInput);
   console.log("userAge", ageInput);
   console.log("runTime", runTimeInput);
   console.log("stretch", stretchInput);

   // Workout Splits

   let firstDay = [
      "Jumping Jacks: " + (.8 * stepsInput),
      "Mountain Climers:" + (.25 * stepsInput),
      "Jump rope: " + (.15 * stepsInput),
      "Squat Jumps: " + (.4 * stepsInput),
      "Lunges: " + (.5 * stepsInput)
   ];

   let secondDay = [
      "Side Shuffles: " + (.8 * ageInput),
      "Burpies: " + (.4 * ageInput),
      "Jump rope: " + (.7 * ageInput),
      "Prisoner Squat Jumps:" + (.2 * ageInput),
   ]

   let thirdDay = [
      "Jog for " + (1.95 * runTimeInput) + " minutes.",
      "Shadow Boxing for "+(1.5 *runTimeInput) + " minutes."
   ]

   let cooldown = [
      "Sumo Squat Stretch",
      "2 Sun Salutations",
      "Seated Twist"
   ]
 
   let restDay = [
      "Rest Day/Active Recovery"
   ]


// Workout Header
   var workoutTitle = document.getElementById("split-title");
   var text = document.createTextNode("Your Custom Cardio Workout:");
      workoutTitle.appendChild(text);


//-------------------------------------------Monday--------------------------------------------------------
// moment(now);
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
      let backWo = cooldown.map(cooldown => {
         let li = document.createElement("li");
         li.textContent = cooldown;
         return li;
      });
      sunSplit.append(... backWo);
}









submitButton.addEventListener('click', createWorkout);