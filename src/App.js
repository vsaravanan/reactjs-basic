import React from 'react'
import './App.css'

import axios from 'axios'

class UserCompany extends React.Component {
  state = {company: undefined, loaded: false}
  fetchCompany  = () => {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data : {
        query : `{
          user(login: "${this.props.username}") {
            company
          }
        }`
      },
      headers: {Authorization: `bearer 9d43813e640a47e7a6881460fa05b046cdc5f2a0`},
    })
    .then(response => { this.setState({company: response.data.data.user.company, loaded: true}) },
    error => { this.setState({error, loaded: true})},
  )
  }
  
  componentDidMount ()  {
    this.fetchCompany()
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username)
    {
      this.fetchCompany()
    }
  }

  render() {
    return (
      this.state.loaded ?
      this.state.error ? 'ERROR' : this.state.company || 'Unknown' 
      : 'loading...'
    )
  }
}

export default class App extends React.Component {
  state = {username: undefined}
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      username: this.inputNode.value,
    })
  }
  render() {
    const {username} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={node => (this.inputNode = node)}
          />
        </form>
        {username ? (
          <UserCompany username={username} />
        ) : null}
      </div>
    )
  }
}
