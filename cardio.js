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
      "Jump rope: " + (.15 * stepsInput),
      "Squat Jumps: " + (.04 * stepsInput),
      "Lunges: " + (.03 * stepsInput)
   ];

   let secondDay = [
      "Side Shuffles: " + (.8 * ageInput),
      "Burpies: " + (.4 * ageInput),
      "Jump rope: " + (.7 * ageInput),
      "Prisoner Squat Jumps: " + (.2 * ageInput),
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
   var text = document.createTextNode("Your Custom Cardio Workout:");
      workoutTitle.appendChild(text);


//-------------------------------------------Today--------------------------------------------------------
   // var mon = document.getElementById("mon");
   // var monText = document.createTextNode("Monday:");
   //    mon.appendChild(monText);

      let monSplit = document.querySelector(".mon-plan")
      let chestWo = firstDay.map(firstDay => {
         let li = document.createElement("li");
         li.textContent = firstDay;
         return li;
      });
      monSplit.append(... chestWo);


      var dayOne = today.format("[Workout for:] dddd")
$(".mon").text(dayOne);
//-------------------------------------------Day2---------------------------------------------------------
   
   // var tues = document.getElementById("tues");
   // var tuesText = document.createTextNode("Tuesday:");
   //    tues.appendChild(tuesText);

      let tuesSplit = document.querySelector(".tues-plan")
      let tuesWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;
      });
      tuesSplit.append(... tuesWo);

      var dayTwo = day2.format("[Workout for:] dddd")
$(".tues").text(dayTwo);
// -------------------------------------------Day3---------------------------------------------------------
   
   // var wed = document.getElementById("wed");
   // var wedText = document.createTextNode("Wednesday:");
   //    wed.appendChild(wedText);

      let wedSplit = document.querySelector(".wed-plan")
      let legWo = secondDay.map(secondDay => {
         let li = document.createElement("li");
         li.textContent = secondDay;
         return li;
      });
      wedSplit.append(... legWo);
      var dayThree = day3.format("[Workout for:] dddd")
      $(".wed").text(dayThree);
// ------------------------------------------Day4-----------------------------------------------------------


   // var thr = document.getElementById("thr");
   // var thrText = document.createTextNode("Thursday:");
   //    thr.appendChild(thrText);

      let thrSplit = document.querySelector(".thr-plan")
      let thrWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;

      });
      thrSplit.append(... thrWo);
      var dayFour = day4.format("[Workout for:] dddd")
      $(".thr").text(dayFour);
// -----------------------------------------Day5----------------------------------------------------------------------

   // var fri = document.getElementById("fri");
   // var friText = document.createTextNode("Friday:");
   //    fri.appendChild(friText);

      let friSplit = document.querySelector(".fri-plan")
      let armWo = thirdDay.map(thirdDay => {
         let li = document.createElement("li");
         li.textContent = thirdDay;
         return li;
      });
      friSplit.append(... armWo);
      var dayFive = day5.format("[Workout for:] dddd")
      $(".fri").text(dayFive);

      if(stretchInput === "yes") {
         monSplit.append(cooldown)
         wedSplit.append(cooldown)
         friSplit.append(cooldown)
      }else if(stretchInput === "Yes") {
         monSplit.append(cooldown)
         wedSplit.append(cooldown)
         friSplit.append(cooldown)
      }else if(stretchInput === "") {
         alert("Cooldown: Yes or no?")
      }else{
         monSplit.append("No cooldown")
         wedSplit.append("No cooldown")
         friSplit.append("No cooldown")
      }


}



submitButton.addEventListener('click', createWorkout);


