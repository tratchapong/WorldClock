import React, {Component} from 'react';
import Clock from './Clock'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      timezone : "Asia/Bangkok",
      children : [],
     }
    // this.addClock = this.addClock.bind(this)
  }
  
  showKey = (ckey) => () => {
    console.log('From Showkey method..')
    console.log(ckey)
  }

  removeClock = (ckey) => () => {
    const updateChildren = [...this.state.children]
    // updateChildren.forEach( x => console.log(x.props))
    let del_idx = updateChildren.findIndex( x => x.props.ckey === ckey)
    console.log(del_idx)
    this.setState({
      children : updateChildren.filter( (x,i) => del_idx !== i )
    })
  }

  addClock = () => {
    // console.log(this)
    let ckey = new Date().getTime()
    this.setState({
      children : [...this.state.children, 
          <Clock 
            key={ckey} 
            ckey={ckey}
            cn="jumbotron bg-primary text-white w-75 mx-auto"
            timezone={this.state.timezone}
            showKey={this.showKey(ckey)}
            removeClock={this.removeClock(ckey)}
          />
        ],
    })
  }

  delLastClock = () => {
    const updateChildren = [...this.state.children]
    console.log(updateChildren)
    updateChildren.pop()
    this.setState({
      children : updateChildren
    })
  }

  
  render() { 
    return ( 
      <>
        <h1 className="jumbotron text-center w-75 mx-auto bg-success text-white">World Clock </h1>
            
            {this.state.children.map( (item,idx) => item )}

          <div className="jumbotron text-center w-75 mx-auto">
            <button className="btn btn-success" onClick={this.addClock}>Add Clock</button> 
            <button className="btn btn-danger" onClick={this.delLastClock}>Del Clock</button>
          </div>
          
      </>
     );
  }
}

export default App;
