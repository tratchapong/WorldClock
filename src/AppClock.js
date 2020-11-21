import React, {useState, useEffect} from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function AppClock() {
  const [options, setOptions] = useState([
     { time : new Date(), tz : 'Asia/Bangkok'}, 
     { time : new Date(), tz : 'Australia/Brisbane'} 
    ])
  const [value, setValue] = useState(new Date())
  const [value2, setValue2] = useState(new Date())
  const [timeZone, setTimeZone] = useState('Asia/Bangkok')
  const [timeZone2, setTimeZone2] = useState('Australia/Brisbane')

  const updateClock = () => {
    let tz =  new Date().toLocaleString("en-US", {timeZone : timeZone})
    let tz2 =  new Date().toLocaleString("en-US", {timeZone : timeZone2})
    setValue(new Date(tz))
    setValue2(new Date(tz2))
    
      let newOpt = options.map( x => {
        let newtz = new Date().toLocaleString("en-US", {timeZone : x.tz})
        x.time = new Date(newtz)
        // console.log(x.time)
        return ({time: x.time, tz: x.tz})
      })
      // console.log('NEWOPT : ', newOpt)
      setOptions(newOpt)

  }

  useEffect(() => {
    const interval = setInterval( ()=> updateClock(), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <p>Current Time of <span style={{background:"gold"}}>{timeZone}</span></p>
      <Clock value={value} />
      <hr />
      <p>Current Time of <span style={{background:"gold"}}>{timeZone2}</span></p>
      <Clock value={value2} />
      <hr />

      {options.map( x => {
        console.log(x)
        return (
          <div>
            <p>Current Time of <span style={{background:"lime"}}> {x.tz}</span></p>
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
