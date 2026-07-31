document.addEventListener("DOMContentLoaded",()=>{


const sliders = [

"spoons",
"pain",
"brainFog",
"vision",
"mobility"

];



sliders.forEach(id=>{


const slider =
document.getElementById(id);


const output =
document.getElementById(id+"Value");



slider.addEventListener(
"input",
()=>{

output.textContent =
slider.value;

});


});





document
.getElementById("saveSymptoms")
.addEventListener("click",()=>{


const symptoms = {


spoons:
document.getElementById("spoons").value,


pain:
document.getElementById("pain").value,


brainFog:
document.getElementById("brainFog").value,


vision:
document.getElementById("vision").value,


mobility:
document.getElementById("mobility").value,


mood:
document.getElementById("mood").value,


date:
new Date().toLocaleDateString()


};




saveSymptoms(symptoms);




document
.getElementById("savedMessage")
.textContent =
"✨ Today's check-in saved 💜";



});



});