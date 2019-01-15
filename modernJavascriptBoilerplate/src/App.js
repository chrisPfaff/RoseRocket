import React from 'react'
import { hot } from 'react-hot-loader'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Red Rocket Driver Location Challenge</h1>
      </div>
    )
  }
}

export default hot(module)(App)
