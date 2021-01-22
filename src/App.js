import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props, timer) {
    super(props)
    this.timer = timer
    this.state = {
      hour: 0,
      minute: 0,
      second: 0 
    }
  }

  start = () => {

    this.timer = setInterval(() => {
      this.setState((prev) => {
        return {
          second: prev.second + 1,
        }
      })
      if(this.state.second === 60) {
        this.setState((prev) => {
          return {
            minute: prev.minute + 1,
            second: 0
          }
        })
      }

      if(this.state.minute === 60) {
        this.setState((prev) => {
          return {
            hour: prev.hour + 1,
            minute: 0
          }
        })
      }
    }, 1000)
  }
  stop = () => {
    clearInterval(this.timer)
  }
  reset = () => {
    this.setState(() => {
      return {
        hour: 0,
        minute: 0,
        second: 0        
      }
    })
  }

  render() {
    return (
      <div>
        <div className="timer">
          <Header />
          <Timer time = {this.state} />
          <Action start = {this.start} stop = {this.stop} reset = {this.reset} />
        </div>
      </div>
    )
  }
}

const Header = () => {
  return <div className="container">
    <h1 className="header">Timer</h1>
  </div>
}

const Timer = (props) => {
  return (
    <div className="container">
      <div className="timer-inner">
        <div>{props.time.hour}</div>:
        <div>{props.time.minute}</div>:
        <div>{props.time.second}</div>
      </div>
    </div>
  )
}

const Action = (props) => {
  return (
    <div className="container">
      <div className="buttons">
      <button className="button reset" onClick={props.reset}>reset</button>
      <button className="button start" onClick={props.start}>start</button>
      <button className="button stop" onClick={props.stop}>stop</button>
      </div>
    </div>
  )
}

export default App;
