document.addEventListener("DOMContentLoaded",()=>{


const profile =
getData("profile");



const symptoms =
getSymptoms();



const journals =
getJournal();



const tarot =
getData("tarotPulls");





// PROFILE GREETING


const welcome =
document.getElementById("welcome");



if(profile){

welcome.innerHTML =
`Welcome,<br>${profile.name} 💜`;

}

else{

welcome.innerHTML =
"Welcome 💜";

}







// SYMPTOMS


if(symptoms){


document.getElementById("homeSpoons")
.textContent =
symptoms.spoons+"/10";


document.getElementById("homePain")
.textContent =
symptoms.pain+"/10";


document.getElementById("homeFog")
.textContent =
symptoms.brainFog+"/10";


document.getElementById("homeMood")
.textContent =
symptoms.mood;


}







// JOURNAL


if(journals.length){


const latest =
journals[journals.length-1];


document.getElementById(
"latestJournal"
)
.textContent =
latest.text;


}






// TAROT


if(tarot && tarot.length){


const latestCard =
tarot[tarot.length-1];


document.getElementById(
"latestCard"
)
.textContent =
latestCard.card;



}







});