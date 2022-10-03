const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const newYear = "1 Jan 2023";

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const second =Math.floor((newYearDate - currentDate) / 1000);
    const secondsR =Math.floor((newYearDate - currentDate) / 1000) % 60;
    const minutsR = Math.floor(second/60) % 60;
    const hoursR = Math.floor(second/3600) % 24;
    const daysR = Math.floor(second/3600/24);

    daysEl.innerText = formatTime(daysR);
    hoursEl.innerText = formatTime(hoursR);
    minsEl.innerText = formatTime(minutsR);
    secondsEl.innerText = formatTime(secondsR);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
