function saveData(key,data){

localStorage.setItem(
key,
JSON.stringify(data)
);

}



function getData(key){

const data =
localStorage.getItem(key);


return data
? JSON.parse(data)
: null;

}



function deleteData(key){

localStorage.removeItem(key);

}





function saveSymptoms(symptoms){

saveData(
"dailySymptoms",
symptoms
);

}



function getSymptoms(){

return getData(
"dailySymptoms"
);

}





function saveJournal(entry){


let journal =
getData("journalEntries")
|| [];


journal.push(entry);



saveData(
"journalEntries",
journal
);


}



function getJournal(){

return getData(
"journalEntries"
)
|| [];

}