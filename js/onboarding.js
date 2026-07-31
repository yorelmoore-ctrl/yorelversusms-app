document.addEventListener("DOMContentLoaded",()=>{


const button =
document.getElementById(
"startJourney"
);



if(button){


button.addEventListener(
"click",
()=>{


localStorage.setItem(
"hasVisited",
"true"
);


});


}


});