const affirmations = [

"You are stronger than you know.",

"Your worth isn't measured by productivity.",

"Rest is productive.",

"You deserve kindness today.",

"One step at a time.",

"Small victories still matter."

];

const random = Math.floor(Math.random() * affirmations.length);

document.getElementById("affirmation").textContent =
affirmations[random];
