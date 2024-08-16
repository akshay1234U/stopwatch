// script.js

let startTime, updatedTime, difference;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function start() {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(showTime, 1000);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    display.innerHTML = "00:00:00";
    running = false;
}

function showTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}`;
}
