import React, { Component } from 'react'
import Aclock from './Aclock'

export class AppAclock extends Component {
  constructor(props) {
    super(props)
    this.state = {
         "seconds": 1,   // set your
         "minutes": 45,  // own
         "hours": 21     // time here.
    }
  }

  componentDidMount() {
   this.interval = setInterval( ()=> this.updateTime(), 1000) 
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateTime() {
    // let ausTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
    let d = new Date().toLocaleString("en-US", { timeZone : "Asia/Bangkok"})
    let dd = new Date(d)
    // console.log(d)
    this.setState ({
        seconds : dd.getSeconds(),
        minutes : dd.getMinutes(),
        hours : dd.getHours()
    })
  }

  render() {
    return (
      <div>
        <Aclock options={this.state} />
      </div>
    )
  }
}

export default AppAclock
