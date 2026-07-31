document.addEventListener("DOMContentLoaded",()=>{


const saveButton =
document.getElementById("saveProfile");



const message =
document.getElementById("profileMessage");



const display =
document.getElementById("profileDisplay");





function showProfile(){


const profile =
getData("profile");



if(!profile){

display.innerHTML =
"<p>Your profile will appear here 💜</p>";

return;

}




display.innerHTML =

`

<div class="tracker">

<p>
✨ Name
</p>

<strong>
${profile.name}
</strong>

</div>



<div class="tracker">

<p>
🦋 Journey
</p>

<strong>
${profile.diagnosis}
</strong>

</div>



<div class="tracker">

<p>
💊 Treatment
</p>

<strong>
${profile.treatment}
</strong>

</div>



<div class="tracker">

<p>
🌙 Reminder
</p>

<strong>
${profile.affirmation}
</strong>

</div>

`;

}





saveButton.addEventListener("click",()=>{


const profile = {


name:
document.getElementById("profileName").value,


diagnosis:
document.getElementById("diagnosis").value,


treatment:
document.getElementById("treatment").value,


affirmation:
document.getElementById("affirmationInput").value


};




saveData(
"profile",
profile
);



message.textContent =
"✨ Profile saved 💜";



showProfile();


});





showProfile();



});