let checkin = {

mood:"",
pain:0,
fatigue:0,
brainFog:0,
hydration:0,
notes:""

};


// MOOD SELECTION

const moods =
document.querySelectorAll(".mood-button");


moods.forEach(button=>{

button.addEventListener("click",()=>{


moods.forEach(btn=>{

btn.classList.remove("selected");

});


button.classList.add("selected");


checkin.mood =
button.dataset.mood;


});

});


// SLIDERS

document
.getElementById("pain")
.addEventListener("input",(e)=>{

checkin.pain=e.target.value;

});


document
.getElementById("fatigue")
.addEventListener("input",(e)=>{

checkin.fatigue=e.target.value;

});


document
.getElementById("brainFog")
.addEventListener("input",(e)=>{

checkin.brainFog=e.target.value;

});


// HYDRATION

const waters =
document.querySelectorAll(".water");


waters.forEach((water,index)=>{


water.addEventListener("click",()=>{


waters.forEach((w,i)=>{


if(i<=index){

w.classList.add("active");

}

else{

w.classList.remove("active");

}


});


checkin.hydration=index+1;


});


});


// NOTES

document
.getElementById("notes")
.addEventListener("input",(e)=>{


checkin.notes=e.target.value;


});


// SAVE

document
.getElementById("saveCheckin")
.addEventListener("click",()=>{


const today =
new Date()
.toISOString()
.split("T")[0];


checkin.date=today;



localStorage.setItem(
"yorelCheckin",
JSON.stringify(checkin)
);



alert(
"💜 Your check-in has been saved"
);



});
