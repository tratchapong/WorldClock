import React, {useState, useEffect} from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function AppClock() {
  const [value, setValue] = useState(new Date())
  const [value2, setValue2] = useState(new Date())
  const [timeZone, setTimeZone] = useState('Asia/Bangkok')
  const [timeZone2, setTimeZone2] = useState('Australia/Brisbane')

  const updateClock = () => {
    let tz =  new Date().toLocaleString("en-US", {timeZone : timeZone})
    let tz2 =  new Date().toLocaleString("en-US", {timeZone : timeZone2})
    setValue(new Date(tz))
    setValue2(new Date(tz2))
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
    </div>
  )
}

export default AppClock
