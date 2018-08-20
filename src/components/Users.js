import React, { PureComponent } from 'react'


export default class Users extends PureComponent {
  state = {
    input: '',
    users: ['Johan']
  }

  add = () => {
    if(this.state.input != ''){
      this.setState({
        users: this.state.users.concat(this.state.input),
        input: ''
      })
    } else {
      alert('Add atleast something to the list')
    }

  }

  listify = () => {
    return this.state.users.map((v, k) => <li key={k}>{v}</li>)
  }

  changeText = (e) => {
    this.setState({
      input : e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>List of users:</h2>
        <ul>{this.listify()}</ul>
        <input type="text" value={this.state.input} onChange={this.changeText}></input>
        <button onClick={this.add}>Add User</button>
      </div>
    )
  }
}