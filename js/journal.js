document.addEventListener("DOMContentLoaded",()=>{


const button =
document.getElementById("saveJournal");


const textBox =
document.getElementById("journalText");


const message =
document.getElementById("journalMessage");


const entriesContainer =
document.getElementById("journalEntries");





function displayEntries(){


const entries =
getJournal();



if(entries.length === 0){

entriesContainer.innerHTML =
"<p>No chapters saved yet 💜</p>";

return;

}




entriesContainer.innerHTML="";



entries.reverse().forEach(entry=>{


const card =
document.createElement("div");


card.className="tracker";


card.innerHTML=`

<p>
${entry.date}
</p>

<strong>
${entry.text}
</strong>

`;



entriesContainer.appendChild(card);


});


}






button.addEventListener("click",()=>{


const text =
textBox.value.trim();



if(text === ""){


message.textContent =
"Write something first 💜";


return;

}





const entry = {


text:text,

date:new Date().toLocaleString()


};




saveJournal(entry);



textBox.value="";



message.textContent =
"✨ Chapter saved 💜";



displayEntries();



});





displayEntries();



});