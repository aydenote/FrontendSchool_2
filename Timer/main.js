const TimerStart = document.querySelector(".time.sec");
const startBtn = document.querySelector(".img-start");
const resetBtn = document.querySelector(".img-reset");

TimerStart.addEventListener("click", ()=>{
    TimerStart.innerText="10";
    startBtn.setAttribute("src", "./img/start-default.svg")
    resetBtn.setAttribute("src", "./img/reset-default.svg")
})

startBtn.addEventListener("click", ()=>{
    let count = parseInt(TimerStart.innerText, 10);
    function setTimer(){
        TimerStart.innerText= String(count-=1).padStart(2,"0");
        console.log(TimerStart.innerText);
    };
    setInterval(function() {
        setTimer();
    }, 1000);
    startBtn.setAttribute("src", "./img/pause.svg");
})

resetBtn.addEventListener("click", ()=>{
    TimerStart.innerText="00";
    startBtn.setAttribute("src", "./img/start-disabled.svg")
    resetBtn.setAttribute("src", "./img/reset-disabled.svg")
})

