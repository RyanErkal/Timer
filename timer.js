let timer = document.querySelector(".timer");
let start = document.getElementById("start");
let duration = document.getElementById("duration");

duration.addEventListener("keypress", setDuration);

let m;
let s;

function setDuration(e){
    if (e.key === "Enter"){
        console.log(e.target.value);
        m = e.target.value;
        s = 0;
        startTimer()
    };
}

function startTimer(){
    //console.log(Number(duration.value));
    //if (s === 0) {s = "00"};
    if (m == 0 && s == 0){
        timer.textContent = "Task Complete"
        return;
    }
    if (s < 10){
        timer.textContent = `${m} : 0${s}`;
    }else{
        timer.textContent = `${m} : ${s}`;
    }
    if (s != 0) {
        s--;
    }else {
        m--;
        s = 59;
    }
    setTimeout(startTimer, 1000)
}

//custom duration input

//number of mins complete tally

//