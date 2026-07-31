document.addEventListener("DOMContentLoaded",()=>{


const deck = [


{
name:"The Star ✨",
meaning:"Hope • Healing • Renewal",
prompt:"What gives you hope during difficult seasons?"
},


{
name:"The Strength 🦁",
meaning:"Courage • Resilience • Inner Power",
prompt:"Where have you shown strength recently?"
},


{
name:"The Hermit 🌙",
meaning:"Rest • Reflection • Listening Within",
prompt:"What does your body need from you today?"
},


{
name:"Temperance 🌈",
meaning:"Balance • Patience • Healing",
prompt:"Where can you create more balance?"
},


{
name:"The Sun ☀️",
meaning:"Joy • Energy • Positive Moments",
prompt:"What small victory can you celebrate?"
},


{
name:"The Chariot 🛡️",
meaning:"Determination • Progress • Direction",
prompt:"What goal are you moving toward?"
}


];





const button =
document.getElementById("drawCard");


const name =
document.getElementById("cardName");


const meaning =
document.getElementById("cardMeaning");


const prompt =
document.getElementById("cardPrompt");


const history =
document.getElementById("tarotHistory");







function loadHistory(){


const pulls =
getData("tarotPulls")
|| [];



if(pulls.length===0){

history.innerHTML=
"<p>No cards pulled yet 💜</p>";

return;

}



history.innerHTML="";



pulls.reverse().forEach(card=>{


const item =
document.createElement("div");


item.className="tracker";


item.innerHTML=

`

<strong>
${card.card}
</strong>

<p>
${card.date}
</p>

`;



history.appendChild(item);


});


}







button.addEventListener("click",()=>{


const card =
deck[
Math.floor(
Math.random()*deck.length
)
];



name.textContent =
card.name;


meaning.textContent =
card.meaning;


prompt.textContent =
card.prompt;





let pulls =
getData("tarotPulls")
|| [];



pulls.push({

card:card.name,

date:
new Date().toLocaleDateString()

});



saveData(
"tarotPulls",
pulls
);



loadHistory();


});





loadHistory();


});