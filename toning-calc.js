var submitButton = document.getElementById('submit-button');
var today = moment();
var day2=moment().add(1,'days');
var day3=moment().add(2,'days');
var day4=moment().add(3,'days');
var day5=moment().add(4,'days');
var day6=moment().add(5,'days');
var day7=moment().add(6,'days');



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
      "Incline Barbell Bench Press, 4x15: " + Math.ceil(.6 * benchPress) + ("lbs"),
      "Dumbell Press, 4x15: " + Math.ceil(.23 * benchPress) + ("lbs"),
      "Incline Dumbell Flyes, 4x15: " + Math.ceil(.15 * benchPress) + ("lbs"),
      "Dumbbell Pullovers Press, 4x15: " + Math.ceil(.4 * benchPress) + ("lbs"),
      "Incline Cable Flyes, 4x12: " + Math.ceil(.2 * benchPress) + ("lbs")
   ];

   let legDay = [
      "Barbell Front Squats, 4x15: " + Math.ceil(.5 * squatInput) + ("lbs"),
      "Leg Curls, 4x12: " + Math.ceil(.4 * squatInput) + ("lbs"),
      "Jump Squats, 4x20: " + Math.ceil(.4 * squatInput),
      "Goblet Squats, 4x15: " + Math.ceil(.2 * squatInput) + ("lbs"),
      "Dumbbell Lunges, 4x15: " + Math.ceil(.18 * squatInput) + ("lbs"),
   ]

   let backDay = [
      "Reverse Pec Deck Flyes, 4x15: " + Math.ceil(.2 * deadliftInput) + ("lbs"),
      "Lat Pull Downs, 4x15: " + Math.ceil(.38 * deadliftInput) + ("lbs"),
      "Seated Cable Rows, 4x15: " + Math.ceil(.45 * deadliftInput) + ("lbs"),
      "Barbell Shrugs, 4x12: " + Math.ceil(.7 * deadliftInput) + ("lbs"),
      "Underhand Barbell Rows, 4x15: " + Math.ceil(.38 * deadliftInput) + ("lbs"),
   ]

   let armDay = [
      "Barbell Bicep Curls, 4x12: " + Math.ceil(.5 * curlInput) + ("lbs"),
      "Overhead Tricep Extension, 4x15: " + Math.ceil(.6 * curlInput) + ("lbs"),
      "Diamond Pushups, 4x20: " + Math.ceil(.23 * curlInput),
      "Dumbbell Hammer Curls, 4x15: " + Math.ceil(.45 * curlInput) + ("lbs"),
      "Seated Dumbbell Curls, 4x12: " + Math.ceil(.35 * curlInput) + ("lbs"),
   ]

   let restDay = [
      "Rest Day/Active Recovery"
   ]


// Workout Header
   var workoutTitle = document.getElementById("split-title");
   var text = "Your Custom Workout:";
   workoutTitle.textContent=text;


//-------------------------------------------Monday--------------------------------------------------------
   
   var mon = document.getElementById("mon");
   var monText =  today.format("[Workout for:] dddd")
   mon.textContent=monText;

      let monSplit = document.querySelector("#mon-plan")
      monSplit.innerHTML= ""
      let chestWo = chestDay.map(chestDay => {
         let li = document.createElement("li");
         li.textContent = chestDay;
         return li;
      });
      monSplit.append(... chestWo);

//-------------------------------------------Tuesday---------------------------------------------------------
   
   var tues = document.getElementById("tues");
   var tuesText =  day2.format("[Workout for:] dddd")
   tues.textContent=tuesText;

      let tuesSplit = document.querySelector("#tues-plan")
      tuesSplit.innerHTML= ""
      let tuesWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;
      });
      tuesSplit.append(... tuesWo);

// -------------------------------------------Wednesday---------------------------------------------------------
   
   var wed = document.getElementById("wed");
   var wedText = day3.format("[Workout for:] dddd")
   wed.textContent=wedText;

      let wedSplit = document.querySelector("#wed-plan")
      wedSplit.innerHTML= ""
      let legWo = legDay.map(legDay => {
         let li = document.createElement("li");
         li.textContent = legDay;
         return li;
      });
      wedSplit.append(... legWo);

// ------------------------------------------Thursday-----------------------------------------------------------


   var thr = document.getElementById("thr");
   var thrText =  day4.format("[Workout for:] dddd")
   thr.textContent=thrText;

      let thrSplit = document.querySelector("#thr-plan")
      thrSplit.innerHTML= ""
      let thrWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;

      });
      thrSplit.append(... thrWo);

// -----------------------------------------Friday----------------------------------------------------------------------

   var fri = document.getElementById("fri");
   var friText = day5.format("[Workout for:] dddd")
   fri.textContent=friText;

      let friSplit = document.querySelector("#fri-plan")
      friSplit.innerHTML= ""
      let armWo = armDay.map(armDay => {
         let li = document.createElement("li");
         li.textContent = armDay;
         return li;
      });
      friSplit.append(... armWo);

//-----------------------------------Saturday-----------------------------------------------------------------------------

   var sat = document.getElementById("sat");
   var satText = day6.format("[Workout for:] dddd")
   sat.textContent=satText;

      let satSplit = document.querySelector("#sat-plan")
      satSplit.innerHTML= ""
      let satWo = restDay.map(restDay => {
         let li = document.createElement("li");
         li.textContent = restDay;
         return li;

      });
      satSplit.append(... satWo);
   
//-----------------------------------Sunday-----------------------------------------------------------------------------

   var sun = document.getElementById("sun");
   var sunText = day7.format("[Workout for:] dddd")
   sun.textContent=sunText;

      let sunSplit = document.querySelector("#sun-plan")
      sunSplit.innerHTML= ""
      let backWo = backDay.map(backDay => {
         let li = document.createElement("li");
         li.textContent = backDay;
         return li;
      });
      sunSplit.append(... backWo);


    
      var finalWorkoutDay1 = chestDay     
      var finalWorkoutDay2 = restDay  
      var finalWorkoutDay3 = legDay   
      var finalWorkoutDay4 =  restDay
      var finalWorkoutDay5 =  armDay
      var finalWorkoutDay6 =  restDay
      var finalWorkoutDay7 =  backDay
      
    
       localStorage.setItem("Your Saved Workout Day 1", JSON.stringify(finalWorkoutDay1));
       localStorage.setItem("Your Saved Workout Day 2", JSON.stringify(finalWorkoutDay2));
       localStorage.setItem("Your Saved Workout Day 3", JSON.stringify(finalWorkoutDay3));
       localStorage.setItem("Your Saved Workout Day 4", JSON.stringify(finalWorkoutDay4));
       localStorage.setItem("Your Saved Workout Day 5", JSON.stringify(finalWorkoutDay5));
       localStorage.setItem("Your Saved Workout Day 6", JSON.stringify(finalWorkoutDay6));
       localStorage.setItem("Your Saved Workout Day 7", JSON.stringify(finalWorkoutDay7));


}


submitButton.addEventListener('click', createWorkout);



var modal=document.getElementById("saveModal");
var saveButton = document.getElementById('save-button');
var closeButton= document.getElementById("closeBtn")[0];

saveButton.addEventListener('click', openModal);
function openModal(){
   modal.style.display= 'block';
   renderMessage()
}


closeBtn.addEventListener('click', closeModal);
function closeModal(){
   modal.style.display= 'none';
}


window.addEventListener('click', outsideClick)
function outsideClick(event){
   if(event.target == modal){
   modal.style.display= 'none';
   }
}


function renderMessage() {
   
   var storedDayOne = JSON.parse(localStorage.getItem("Your Saved Workout Day 1"));
   var storedDayTwo= JSON.parse(localStorage.getItem("Your Saved Workout Day 2"));
   var storedDayThree = JSON.parse(localStorage.getItem("Your Saved Workout Day 3"));
   var storedDayFour = JSON.parse(localStorage.getItem("Your Saved Workout Day 4"));
   var storedDayFive = JSON.parse(localStorage.getItem("Your Saved Workout Day 5"));
   var storedDaySix = JSON.parse(localStorage.getItem("Your Saved Workout Day 6"));
   var storedDaySeven = JSON.parse(localStorage.getItem("Your Saved Workout Day 7"));
   
   if ( storedDayOne !== null) {
      document.querySelector("#savedDay1").textContent =  storedDayOne
    } 

   if (storedDayTwo !== null) {
      document.querySelector("#savedDay2").textContent = storedDayTwo
    }
  
   if (storedDayThree !== null) {
      document.querySelector("#savedDay3").textContent =storedDayThree
   }
   if (storedDayFour !== null) {
      document.querySelector("#savedDay4").textContent =storedDayFour
    }
   if (storedDayFive !== null) {
      document.querySelector("#savedDay5").textContent = storedDayFive
    };
   if (storedDaySix !== null) {
      document.querySelector("#savedDay6").textContent = storedDaySix
    };
   if (storedDaySeven !== null) {
      document.querySelector("#savedDay7").textContent = storedDaySeven
    };

   };