let score = 0;
let time = 5;

// Iteration 2: Generate 2 random number and display it on the screen
let num1;
let num2;
function genereateNum(){
    time = 5;
    num1 = Math.floor(Math.random()*100);
    num2 = Math.floor(Math.random()*100);

    document.querySelector("#number1").innerHTML = num1;
    document.querySelector("#number2").innerHTML = num2;
}
genereateNum();

// Iteration 3: Make the options button functional
document.querySelector("#greater-than").addEventListener("click", function(){
    if(num1 > num2){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

document.querySelector("#lesser-than").addEventListener("click", function(){
    if(num1 < num2){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

document.querySelector("#equal-to").addEventListener("click", function(){
    if(num1 == num2){
        genereateNum();
        score++;
    } else {
        window.location.href = "gameover.html";
    }
});

// Iteration 4: Build a timer for the game

function ticktick(){
    localStorage.setItem('score', score);
    document.querySelector("#timer").innerHTML = time;
    if(time == 0){
        clearInterval(timeCount);
        window.location.href = "gameover.html";
    }
    time--;
}

let timeCount = setInterval(ticktick, 1000);
