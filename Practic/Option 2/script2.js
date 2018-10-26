function function1(){
    var answer = prompt("Enter pls your greetings", "Here...");
    var counter = 0;
    do {
        alert(answer); // - Діалогове вікно
        document.getElementById("pText1").innerText += " " + answer + " "; // - Без диалогового вікна
        counter++;
    } while(counter != 5);
    // - Тут если шо два варианта вивода - вивод на екран з діалоговим вікном і без, того спитайте як саме виводить!
}

function function2(){
    var a1 = 2; // - Номер вашого компа, перший член арифметичної прогресії
    var d = 2; // - Коефіцієнт арифметичної прогресії
    var counter = 0;
    var Summary = a1;
    do{
        document.getElementById("pText2").innerText += " " + String(a1) + "; ";
        a1 += d;
        Summary += a1;
        counter++;
    } while (counter != 14);
    document.getElementById("pText2").innerText += " " + String(a1) + "; ";
    document.getElementById("pText2").innerText += " Summary: " + String(Summary);
}

function function3(){
    var counter;
    var Computer = 2; // - Номер вашого компа
    for(counter = 51; counter <= 100; counter++){
        if(counter % 4 === 0 || counter % 7 === 0 || counter % Computer === 0){
            if(counter % 4 === 0 || counter % 7 === 0 ) {
                document.getElementById("pText3").innerText += " " + String(counter + 1) + " ";
            } else {
                continue;
            }
        } else {
            document.getElementById("pText3").innerText += " " + String(counter) + " ";
        }
    }
}