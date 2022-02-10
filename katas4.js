let gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

let lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const containerDiv = document.getElementById('container');
const button = document.getElementById('button');

function reset() {
    let paragrafos = document.getElementById("container");
    paragrafos.innerHTML = "";
}

button.addEventListener('click', function (){
    reset();
    setTimeout(function(){ kata1();}, 1250)
    setTimeout(function(){ kata2();}, 1400)
    setTimeout(function(){ kata3();}, 1550)
    setTimeout(function(){ kata4();}, 1700)
    setTimeout(function(){ kata5();}, 1850)
    setTimeout(function(){ kata6();}, 2000)
    setTimeout(function(){ kata7();}, 2150)
    setTimeout(function(){ kata8();}, 2300)
    setTimeout(function(){ kata9();}, 2450)
    setTimeout(function(){ kata10();}, 2600)
    setTimeout(function(){ kata11();}, 2750)
    setTimeout(function(){ kata12();}, 2900)
    setTimeout(function(){ kata13();}, 3050)
    setTimeout(function(){ kata14();}, 3200)
    setTimeout(function(){ kata15();}, 3350)
    setTimeout(function(){ kata16();}, 3500)
    setTimeout(function(){ kata17();}, 3650)
    setTimeout(function(){ kata18();}, 3800)
    setTimeout(function(){ kata19();}, 4000)
    setTimeout(function(){ kata20();}, 4250)


})

function showResults(arrayShow) {
    const p = document.createElement('p');
    if(typeof(arrayShow) === 'string'){
        p.innerHTML = arrayShow;
    }
    if(typeof(arrayShow) !== 'string'){
        p.textContent = JSON.stringify(arrayShow)
    }
    container.appendChild(p)
 }

function kata1() {
    let output =gotCitiesCSV.split(',');
    showResults(output);
    return output;
}

function kata2() {
    let output =bestThing.split(' ');
    showResults(output);
    return output;
}

function kata3() {
    let output =gotCitiesCSV.replace(",", ";");
    showResults(output);
    return output;
}

function kata4() {
    let output =lotrCitiesArray.join(',');
    showResults(output);
    return output;
}

function kata5() {
    let output = [];
    for(let i = 0; i < 5; i++){
        output.push(lotrCitiesArray[i]);
    }
    showResults(output);
    return output;
}

function kata6() {
    let fivehigh = lotrCitiesArray.length;
    let fivemin = lotrCitiesArray.length - 5
    let output = [];
    for(let i = fivemin; i < fivehigh; i++){
        output.push(lotrCitiesArray[i]);
    }
    showResults(output);
    return output;
}

function kata7() {

    let output = [];
    for(let i = 2; i < 5; i++){
        output.push(lotrCitiesArray[i]);
    }
    showResults(output);
    return output;
}

function kata8() {

    lotrCitiesArray.splice(2, 1);
    let output = lotrCitiesArray;
    showResults(output);
    return output;
}

function kata9() {

    lotrCitiesArray.splice(5, 2);
    let output = lotrCitiesArray;
    showResults(output);
    return output;
}

function kata10() {

    lotrCitiesArray.splice(2, 0, "Rohan");
    let output = lotrCitiesArray;
    showResults(output);
    return output;
}



function kata11() {

    lotrCitiesArray.splice(5, 1, "Deadest Marshes");
    let output = lotrCitiesArray;
    showResults(output);
    return output;
}


function kata12() {

    const output =bestThing.slice(0, 14);
    showResults(output);
    return output;
}

function kata13() {
    const output =bestThing.slice(-12);    
    showResults(output);
    return output;
}


function kata14() {

    const output =bestThing.slice(23, 38);
    
    showResults(output);
    return output;
}

function kata15() {
    let tamanhoFinal = bestThing.length;
    let tamanhoComeco = bestThing.length - 12;
    const output =bestThing.substring(tamanhoComeco, tamanhoFinal);    
    showResults(output);
    return output;
}


function kata16() {

    const output =bestThing.substring(23, 38);
    
    showResults(output);
    return output;
}

function kata17() {
    lotrCitiesArray.pop();
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

function kata18() {
   lotrCitiesArray.push("Deadest Marshes")
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

function kata19() {
    lotrCitiesArray.shift();
     showResults(lotrCitiesArray);
     return lotrCitiesArray;
 }
 
 function kata20() {
    lotrCitiesArray.unshift("Mordor");
     showResults(lotrCitiesArray);
     return lotrCitiesArray; 
 }
 






