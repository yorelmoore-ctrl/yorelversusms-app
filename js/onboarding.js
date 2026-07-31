document.addEventListener("DOMContentLoaded",()=>{


const button =
document.getElementById(
"startJourney"
);



button.addEventListener(
"click",
()=>{


localStorage.setItem(
"hasVisited",
"true"
);



});



});