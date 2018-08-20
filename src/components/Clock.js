import React, { PureComponent } from 'react'


export default class Clock extends PureComponent {
  state = {
    hours: '',
    minutes: '',
    seconds: ''
  }

  prettyfy = (num) => {
    return num < 10 ? '0' + num : num 
  }

  update = () => {
    var d = new Date()
    this.setState({
      hours: this.prettyfy(d.getHours()),
      minutes: this.prettyfy(d.getMinutes()),
      seconds: this.prettyfy(d.getSeconds())
    })
  }

  componentDidMount(){
    setInterval(this.update, 1000)
  }

  render() {
    return (
      <div>
        <span>{this.state.hours}</span>
        <span>:{this.state.minutes}</span>
        <span>:{this.state.seconds}</span>
      </div>
    )
  }
}