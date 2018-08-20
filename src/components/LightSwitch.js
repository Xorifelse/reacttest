import React, { PureComponent } from 'react'

export default class LightSwitch extends PureComponent {
  state = { active: true }

  render() {
    return (<div>
      <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
    </div>)
  }
}