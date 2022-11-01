var submitButton = document.getElementById('submit-button');
var today = moment();
var day2=moment().add(1,'days');
var day3=moment().add(2,'days');
var day4=moment().add(3,'days');
var day5=moment().add(4,'days');


submitButton.addEventListener('click', createWorkout);

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
      "Jumping Jacks: " + Math.ceil(.02 * stepsInput),
      "Mountain Climers: " + Math.ceil(.01 * stepsInput),
      "Jump rope: " + Math.ceil(.05 * stepsInput),
      "Squat Jumps: " + Math.ceil(.04 * stepsInput),
      "Lunges: " + Math.ceil(.03 * stepsInput)
   ];

   let secondDay = [
      "Side Shuffles: " + Math.ceil(1.5 * ageInput),
      "Burpies: " + Math.ceil(1.4 * ageInput),
      "Jump rope: " + Math.ceil(2.7 * ageInput),
      "Prisoner Squat Jumps: " + Math.ceil(.6 * ageInput),
   ]

   let thirdDay = [
      "Jog for " + Math.ceil(1.95 * runTimeInput) + " minutes.",
      "Shadow Boxing for "+ Math.ceil(1.5 *runTimeInput) + " minutes."
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

   var dayOne = today.format("dddd")
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
   var dayTwo = day2.format("dddd")
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
   var dayThree = day3.format("dddd")
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
   var dayFour = day4.format("dddd")
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
   var dayFive = day5.format("dddd")
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
         // alert("Cooldown: Yes or no?")
      }else{
         monSplit.append("No cooldown")
         wedSplit.append("No cooldown")
         friSplit.append("No cooldown")
      }

    
      var finalWorkoutDay1 = firstDay     
      var finalWorkoutDay2 = restDay  
      var finalWorkoutDay3 = secondDay   
      var finalWorkoutDay4 =  restDay
      var finalWorkoutDay5 =  thirdDay
      
    
       localStorage.setItem("Your Saved Workout Day 1", JSON.stringify(finalWorkoutDay1));
       localStorage.setItem("Your Saved Workout Day 2", JSON.stringify(finalWorkoutDay2));
       localStorage.setItem("Your Saved Workout Day 3", JSON.stringify(finalWorkoutDay3));
       localStorage.setItem("Your Saved Workout Day 4", JSON.stringify(finalWorkoutDay4));
       localStorage.setItem("Your Saved Workout Day 5", JSON.stringify(finalWorkoutDay5));
      
}

      



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

   };