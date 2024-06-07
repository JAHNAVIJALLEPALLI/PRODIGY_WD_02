let hour = 0;
let minute = 0;
let seconds = 0;
let timer;

const start = () => {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
}

const stop = () => {
    clearInterval(timer);
    timer = null;
}

const reset = () => {
    clearInterval(timer);
    timer = null;
    hour = 0;
    minute = 0;
    seconds = 0;
    document.getElementById('hour').textContent = '00:';
    document.getElementById('minute').textContent = '00:';
    document.getElementById('seconds').textContent = '00';
}

const updateTime = () => {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    document.getElementById('hour').textContent = (hour < 10 ? '0' + hour : hour) + ':';
    document.getElementById('minute').textContent = (minute < 10 ? '0' + minute : minute) + ':';
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

const object = { start, stop, reset };
