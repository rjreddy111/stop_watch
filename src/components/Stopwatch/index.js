// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, timerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  stringifiedtime = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const strigifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const strigifiedseconds = seconds > 9 ? seconds : `0${seconds}`
    return `${strigifiedMinutes}:${strigifiedseconds}`
  }

  onStartStopWatch = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({timerRunning: true})
  }

  tick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  stopButton = () => {
    clearInterval(this.timerId)
    this.setState({timerRunning: false})
  }

  onResetButton = () => {
    this.setState({time: 0, timerRunning: false})
    clearInterval(this.timerId)
  }

  render() {
    const {timerRunning} = this.state
    return (
      <div className="stopwatch-main-bg-container">
        <h1>Stopwatch</h1>
        <div className="stopwatch-card-container">
          <div className="top-card-line">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              className="image"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1 className="timer-console">{this.stringifiedtime()}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onStartStopWatch}
              disabled={timerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-button"
              onClick={this.stopButton}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-button"
              onClick={this.onResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
