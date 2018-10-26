function function1(){
    var answer = prompt("Enter pls the number of times to repeat", "Here...");
    var counter = 0;
    do {
        document.getElementById("pText1").innerText += " Hello!";
        counter++;
    } while(counter != answer);
    document.getElementById("pText1").innerText += " Daniel Orel"; // - Нужно змінить ім'я!
}

function function2(){
    var b1 = 2; // - Номер вашого компа, перший член геометричної прогресії
    var q = 2; // - Знаменник геометричної прогресії
    var counter = 0;
    var Summary = b1;
    do{
        document.getElementById("pText2").innerText += " " + String(b1) + "; ";
        b1 *= q;
        Summary += b1;
        counter++;
    } while (counter != 9);
    document.getElementById("pText2").innerText += " " + String(b1) + "; ";
    document.getElementById("pText2").innerText += " Summary: " + String(Summary);
}

function function3(){
    var counter;
    var Computer = 2; // - Номер вашого компа
    for(counter = 1; counter <= 50; counter++){
        if(counter % 3 === 0 || counter % 5 === 0 || counter % Computer === 0){
            if(counter % 5 === 0 || counter % 3 === 0 ) {
                document.getElementById("pText3").innerText += " " + String(counter + 1) + " ";
            } else {
                continue;
            }
        } else {
            document.getElementById("pText3").innerText += " " + String(counter) + " ";
        }
    }
}