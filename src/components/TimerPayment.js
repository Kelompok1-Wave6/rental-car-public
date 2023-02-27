import React, { Fragment} from 'react'

const TimerPayment = ({ timerDay, timerHours, timerMin, timerSecond }) => 
{
    return ( <Fragment>
        <section className='timer_conn'>
            <section className="timer">
                <div className="d-flex clock">
                    {/* <section>
                        <p className='fs-5'>{timerDay}</p>
                    </section>
                    <span>:</span> */}
                    <section>
                        <p className='fs-5'>{timerHours}</p>
                    </section>
                    <span>:</span>
                    <div>
                        <p className='fs-5'>{timerMin}</p>
                    </div>
                    <span>:</span>
                    <div>
                        <p className='fs-5'>{timerSecond}</p>
                    </div>
                    
                    
                </div>
            </section>
        </section>
    </Fragment>
    )
}

TimerPayment.defaultProps = {
    timerHours: 24,
    timerMin: 60,
    timerSecond: 10
}

export default TimerPayment