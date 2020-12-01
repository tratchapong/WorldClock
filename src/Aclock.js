import React from 'react'
import AnalogClock from 'analog-clock-react'

function Aclock(props) {
  const options = {
      useCustomTime: true,    // set this to true
      width: "300px",
      border: true,
      borderColor: "#2e2e2e",
      baseColor: "#17a2b8",
      centerColor: "lime",
      centerBorderColor: "#fff",
      handColors: {
        second: "#d81c7a",
        minute: "#fff",
        hour: "#fff"
      }
  } 
  let  {hours, minutes, seconds} = props.options
  // let opt = {...options, hours, minutes, seconds}
  let opt = {...options, ...props.options}
 console.log(opt)
 return (
    <div>
      <h1>Ratchapong analog clock</h1><br />
      <AnalogClock { ...opt } />
    </div>
  )
}

export default Aclock
