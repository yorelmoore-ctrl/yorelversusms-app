function enterApp(){

document.getElementById("welcome")
.style.display="none";


document.getElementById("appContent")
.classList.remove("hidden");


showPage("home");

}



function showPage(page){

document.querySelectorAll(".page")
.forEach(section=>{

section.classList.remove("active");

});


document.getElementById(page)
.classList.add("active");

}



function saveEntry(){

let text =
document.querySelector("textarea").value;


localStorage.setItem(
"yorelEntry",
text
);


alert(
"Saved to Evidence I Exist 💜"
);

}