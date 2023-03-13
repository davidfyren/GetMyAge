//model//




//view//

updateView()

function updateView(){
    let HTML = /*HTML*/`
    Skriv inn navn her
    <input type="text" id="nameBox"> <br>
    Skriv inn fødselsår her
    <input type="text" id="ageBox"> <br>
    <button onclick="display()"> submit </button>
    <div id="demo"> </div>
    `
    document.getElementById('app').innerHTML=HTML
}

//controller//

function returnName(){
    let userName = document.getElementById('nameBox').value
    return userName
}

function returnAge(){
    let userBirthYear = document.getElementById('ageBox').value
    let d = new Date()
    let year = d.getFullYear()
    let userAge = year - userBirthYear
    return userAge
}

function display(){
    document.getElementById('demo').innerHTML = /*html*/
    `du heter ${returnName()} og er ${returnAge()} år gammel`
    
}