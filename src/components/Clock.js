import React from 'react';
const Clock = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
    return (
    <>
<section className="timer-container">
    <section className="timer">
        <div className="clock">
            <section>
                <p>{timerDays}</p>
                <small>days</small>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <small>Hour</small>
            </section>{""}
            <span>:</span>
            <section>
                <p>{timerMinutes}</p>
                <small>Minutes</small>
            </section>{""}
            <span>:</span>
            <section>
                <p>{timerSeconds}</p>
                <small>Second</small>
            </section>
        </div>
    </section>
</section>
    </>
    );
}
Clock.defaultProps ={
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
}
export default Clock;