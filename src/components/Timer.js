
import {useEffect, useState} from 'react';
import '../styles/Timer.css'


function changeTime() {
    // function formatTime(time) {
    //     const minutes = Math.floor(time / 60);
    //     let seconds = time % 60;

    //     if (seconds < 10) {
    //         seconds = `0${seconds}`;
    //     }

    //     return `${minutes}:${seconds}`;
    // }

}

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function startTimer(time) {

    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;        
        if(timeLeft <= 0){
            clearInterval(timerInterval);
        } else {
            time(timeLeft);
        }
    }, 1000);

}


const Timer = () => {

    const [timerActive, setStatus] = useState("stopped");
    const [time, setTime] = useState(0);
    
    useEffect(() => {

        if(timerActive) {
            startTimer(setTime);
        }
        console.log(time)

    });



    return(
        <>


        <div>
          <button onClick={() => {setStatus("running");}}>Start</button>
          <button onClick={() => {setStatus("paused")}}>Pause</button>
          <button onClick={() => {setStatus('stopped')}}>End</button>
        </div>

        <br/>

        <div class='timer'>
        <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                    id="base-timer-path-remaining"
                    stroke-dasharray="283"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                    "
                ></path>
                </g>
            </svg>  
            <span id="base-timer-label" class="base-timer__label">{time}</span>
        </div>
        </div>
        </>
    );
}


export default Timer;