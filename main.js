const buttons = document.querySelectorAll(".button");
const texts = document.querySelectorAll(".aba-content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {

        for (let d = 0; d < buttons.length; d++) {
            buttons[d].classList.remove("active");
            texts[d].classList.remove("active");

        }
        buttons[i].classList.add("active");
        texts[i].classList.add("active");
    }

}

const counters = document.querySelectorAll(".counter");
const time = new Date("2023-04-05T00:00:00");
const time2 = new Date("2024-05-05T00:00:00");
const time3 = new Date("2024-06-05T00:00:00");
const time4 = new Date("2024-06-25T00:00:00");

const times = [time, time2, time3, time4];


// counters[0].textContent = calculateTime(time);

function calculateTime(ObjcetiveTime) {
    let courrentTime = new Date();
    let finalTime = ObjcetiveTime - courrentTime;
    let seconds = Math.floor(finalTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    if (finalTime > 0) {
        return [days,hours,minutes,seconds]; //nesse caso não vai mais retornar uma string
    } else {
        return [0, 0, 0, 0];

    }
}

function updateTimer() {
    //pega os ids do index.html,
    document.getElementById("days0").textContent = calculateTime(times[1])[0];
    document.getElementById("hours0").textContent = calculateTime(times[1])[1];
    document.getElementById("minutes0").textContent = calculateTime(times[1])[2];
    document.getElementById("seconds0").textContent = calculateTime(times[1])[3];

    for (let i = 0; i < counters.length; i++) {
        // counters[i].textContent = calculateTime(times[i]);
    }
}

function startTimer() {
    updateTimer();
    setInterval(updateTimer, 1000);

}

startTimer();

