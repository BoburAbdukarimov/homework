import React, { useEffect, useState } from 'react';
import "./App.css"
import Clock from './components/Clock';
function App() {
    const[timerDays, setTimerDays]= useState();
    const[timerHours, setTimerHours]= useState();
    const[timerMinutes, setTimerMinutes]= useState();
    const[timerSeconds, setTimerSeconds]= useState();

    let interval;
    const starttimer=()=>{
        const coundownDate = new Date("June 26, 2022").getTime();

        interval= setInterval(()=>{
            const now= new Date().getTime();

            const distance = coundownDate - now;

            const days = Math.floor(distance/(24*60*60*1000));
            const hour = Math.floor((distance%(24*60*60*1000))/(1000*60*60));
            const minutes = Math.floor((distance%(60*60*1000))/(1000*60));
            const seconds = Math.floor((distance % (60*1000))/(1000));

            if(distance < 0){
                clearInterval(interval.current)
            }else{
                setTimerDays(days)
                setTimerHours(hour)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
             
        })
    }


    useEffect(()=>{
        starttimer()
    })
    return (
     <div className='App'>
        <div className="text">
            <h1>Oz qoldi.. kf p 🥵😂</h1>
        </div>
        <div className="ClockApp">
               <Clock timerDays={timerDays} timerHours={timerHours}
    timerMinutes={timerMinutes} timerSeconds={timerSeconds}/> 
        </div>
        <form action="https://formsubmit.co/bobur02k@gmail.com" method="POST">
        <label> <textarea placeholder='Massage:...💌 ' cols="30" rows="2" name="message"></textarea></label>
            <button type='submit'>send</button>
        </form>

     </div>
    )
}
export default App;