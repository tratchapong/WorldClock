import React, {useState, useEffect} from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function AppClock() {
  const [options, setOptions] = useState([
     { time : new Date(), tz : 'Asia/Bangkok'}, 
     { time : new Date(), tz : 'Australia/Brisbane'}, 
     { time : new Date(), tz : 'America/New_York'}, 
     { time : new Date(), tz : 'Europe/Istanbul'} 
    ])

  const updateClock = () => {
    
      let newOpt = options.map( x => {
        let newtz = new Date().toLocaleString("en-US", {timeZone : x.tz})
        x.time = new Date(newtz)
        return ({time: x.time, tz: x.tz})
      })
      setOptions(newOpt)

  }

  useEffect(() => {
    const interval = setInterval( ()=> updateClock(), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div style={{width:"fit-content", margin:"0 auto", textAlign:"center"}}>
      {options.map( x => {
        console.log(x)
        return (
          <div style={{color: "whitesmoke"}}>
            {
             x.time.getHours()<12 ?
             <p><span style={{background:"tomato"}}> {x.tz}</span></p> 
             : 
             <p><span style={{background:"darkblue"}}> {x.tz}</span></p>
             }
            <Clock value={x.time} />
            <hr />
          </div>
        ) 
      }
      )}
    </div>
  )
}

export default AppClock
