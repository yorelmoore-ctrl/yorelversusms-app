// Yorel Versus MS Storage System 💜


// SAVE DATA

function saveData(key, data){

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}




// GET DATA

function getData(key){

    const data =
    localStorage.getItem(key);


    return data
    ? JSON.parse(data)
    : null;

}





// DELETE DATA

function deleteData(key){

    localStorage.removeItem(key);

}




// SAVE SYMPTOM CHECK-IN

function saveSymptoms(symptoms){

    saveData(
        "dailySymptoms",
        symptoms
    );

}





// GET SYMPTOMS

function getSymptoms(){

    return getData(
        "dailySymptoms"
    );

}





// SAVE JOURNAL ENTRY

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





// GET JOURNAL

function getJournal(){

    return getData(
        "journalEntries"
    )
    || [];

}