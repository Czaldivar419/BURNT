var submitButton = document.getElementById('submit-button');
var today = moment();
var day2=moment().add(1,'days');
var day3=moment().add(2,'days');
var day4=moment().add(3,'days');
var day5=moment().add(4,'days');



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
      "Jumping Jacks: " + (.02 * stepsInput),
      "Mountain Climers: " + (.01 * stepsInput),
      "Jump rope: " + (.05 * stepsInput),
      "Squat Jumps: " + (.04 * stepsInput),
      "Lunges: " + (.03 * stepsInput)
   ];

   let secondDay = [
      "Side Shuffles: " + (1.5 * ageInput),
      "Burpies: " + (1.4 * ageInput),
      "Jump rope: " + (2.7 * ageInput),
      "Prisoner Squat Jumps: " + (.6 * ageInput),
   ]

   let thirdDay = [
      "Jog for " + (1.95 * runTimeInput) + " minutes.",
      "Shadow Boxing for "+(1.5 *runTimeInput) + " minutes."
   ]

   let restDay = [
      "Rest Day/Active Recovery"
   ]

   let cooldown = ("Sumo Squat Stretch, 2 Sun Salutations, Seated Twist")

// Workout Header
   var workoutTitle = document.getElementById("split-title");
   var text ="Your Custom Cardio Workout:";
      workoutTitle.textContent=text;


//-------------------------------------------Today--------------------------------------------------------
   var mon = document.getElementById("mon");

   var dayOne = today.format("[Workout for:] dddd")
   mon.textContent=dayOne;

      let monSplit = document.querySelector("#mon-plan")
      monSplit.innerHTML= ""
      let chestWo = firstDay.map(firstDay => {
         let li = document.createElement("li");
         li.textContent = firstDay;
         return li;
      });
      monSplit.append(... chestWo);



//-------------------------------------------Day2---------------------------------------------------------
   
   var tues = document.getElementById("tues");
   var dayTwo = day2.format("[Workout for:] dddd")
   tues.textContent=dayTwo;

      let tuesSplit = document.querySelector("#tues-plan")
      tuesSplit.innerHTML= ""
      let tuesWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;
      });
      tuesSplit.append(... tuesWo);


// -------------------------------------------Day3---------------------------------------------------------
   
   var wed = document.getElementById("wed");
   var dayThree = day3.format("[Workout for:] dddd")
   wed.textContent=dayThree;

      let wedSplit = document.querySelector("#wed-plan")
      wedSplit.innerHTML= ""
      let legWo = secondDay.map(secondDay => {
         let li = document.createElement("li");
         li.textContent = secondDay;
         return li;
      });
      wedSplit.append(... legWo);

// ------------------------------------------Day4-----------------------------------------------------------


   var thr = document.getElementById("thr");
   var dayFour = day4.format("[Workout for:] dddd")
   thr.textContent=dayFour;

      let thrSplit = document.querySelector("#thr-plan")
      thrSplit.innerHTML= ""
      let thrWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;

      });
      thrSplit.append(... thrWo);

// -----------------------------------------Day5----------------------------------------------------------------------

   var fri = document.getElementById("fri");
   var dayFive = day5.format("[Workout for:] dddd")
   fri.textContent=dayFive;

      let friSplit = document.querySelector("#fri-plan")
      friSplit.innerHTML= ""
      let armWo = thirdDay.map(thirdDay => {
         let li = document.createElement("li");
         li.textContent = thirdDay;
         return li;
      });
      friSplit.append(... armWo);


      if(stretchInput === "yes") {
         monSplit.append(cooldown);
         wedSplit.append(cooldown);
         friSplit.append(cooldown);
      }else if(stretchInput === "Yes") {
         monSplit.append(...cooldown);
         wedSplit.append(...cooldown);
         friSplit.append(...cooldown);
      }else if(stretchInput === "") {
         alert("Cooldown: Yes or no?")
      }else{
         monSplit.append("No cooldown")
         wedSplit.append("No cooldown")
         friSplit.append("No cooldown")
      }


}



submitButton.addEventListener('click', createWorkout);

