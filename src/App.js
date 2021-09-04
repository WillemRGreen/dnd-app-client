import './App.css';
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sharpshooter from './Sharpshooter/Sharpshooter'

class App extends Component {

  renderRoutes() {
    return (
      <div>
        <Route
          path={'/sharpshooter'}
          component={Sharpshooter}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>
          DnD combat calculations
        </h1>
      </header>
      <main>
        {this.renderRoutes()}
      </main>
      </div>
    )
  }
}

export default App;
