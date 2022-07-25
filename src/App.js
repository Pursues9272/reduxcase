//App.js
import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import About from './class-com/about'
import Home from './class-com/home'
class App extends Component {
  render() {
    const { count  } = this.props
    return (
      <div className="App">
        <span>store：{count}</span>
        <h1>Home</h1>
        <Home/>
        <h1>About</h1>
        <About/>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({count:state.count})
export default connect(mapStateToProps)(App)
