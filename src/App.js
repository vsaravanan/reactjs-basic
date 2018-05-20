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
      headers: {Authorization: `bearer 6cde3e34072e88d43e4e5f7cdda9f1c7ba36c7f1`},
    })
    .then(response => { this.setState({company: response.data.data.user.company, loaded: true}) },
    error => { this.setState({error, loaded: true})},
  )
  }
  
  componentDidMount ()  {
    this.fetchCompany()
  }
  
  render() {
    return (
      this.state.company || 'Unknown' 

    )
  }
}
const username = 'vsaravanan'
const element = (
<div>
<div>
  {`@${username} works at `}
  <UserCompany username={username} />
</div>
</div>
)

export default class App extends React.Component {
  render() {
    return ( element) ;
  }
}