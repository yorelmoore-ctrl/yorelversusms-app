document.addEventListener("DOMContentLoaded", () => {


    // GREETING SYSTEM

    const greeting = document.querySelector(".hero h1");


    const hour = new Date().getHours();


    let timeGreeting;


    if (hour < 12) {

        timeGreeting = "Good Morning";

    } else if (hour < 18) {

        timeGreeting = "Good Afternoon";

    } else {

        timeGreeting = "Good Evening";

    }


    greeting.innerHTML =
    `${timeGreeting},<br>Yorel 💜`;





    // DAILY AFFIRMATIONS

    const affirmations = [

        "You are allowed to rest and still be powerful. 💜",

        "Your body is not your enemy. It is communicating with you. 🦋",

        "A slow day is still a day forward. ✨",

        "You are more than your diagnosis. 🌙",

        "Small victories are still victories. 🌱",

        "Your story deserves to be documented. 📖"

    ];



    const affirmationBox =
    document.getElementById("affirmation");



    const randomAffirmation =
    affirmations[
        Math.floor(Math.random() * affirmations.length)
    ];



    affirmationBox.textContent =
    randomAffirmation;






    // JOURNAL BUTTON

    const journalButton =
    document.querySelector(".journal-banner .primary-btn");


    journalButton.addEventListener("click", () => {


        alert(
        "Your journal sanctuary is opening soon 💜"
        );


    });






    // TAROT BUTTON

    const tarotButton =
    document.querySelector(".secondary-btn");


    tarotButton.addEventListener("click", () => {


        alert(
        "🔮 Your card is being shuffled... Tarot feature coming soon!"
        );


    });





    // DAILY ENTRY BUTTON

    const entryButton =
    document.querySelector(".card .primary-btn");


    entryButton.addEventListener("click", () => {


        alert(
        "Today's chapter check-in is opening soon 🦋"
        );


    });



});