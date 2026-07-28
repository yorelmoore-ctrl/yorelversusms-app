// Yorel Versus MS App
// Main Navigation + App Functions


function enterApp() {

    const welcome = document.getElementById("welcome");
    const mainApp = document.getElementById("mainApp");

    welcome.classList.remove("active");
    welcome.classList.add("hidden");

    mainApp.classList.remove("hidden");

    showPage("home");

}




function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });


    const selectedPage = document.getElementById(pageName);


    if(selectedPage){

        selectedPage.classList.add("active");

    }


}



// Save Symptom Notes

function saveData(){

    const notes = document.querySelector("textarea").value;

    localStorage.setItem(
        "msNotes",
        notes
    );


    alert(
        "Your check-in has been saved 💜"
    );

}




// Load Saved Notes

window.onload = function(){

    const savedNotes =
    localStorage.getItem("msNotes");


    const textArea =
    document.querySelector("textarea");


    if(savedNotes && textArea){

        textArea.value = savedNotes;

    }

};