import './App.css';
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sharpshooter from './Sharpshooter/Sharpshooter'
import MainPage from './MainPage/MainPage';

class App extends Component {

  renderRoutes() {
    return (
      <section>
        <div>
          <Route
            path={'/sharpshooter'}
            component={Sharpshooter}
          />
        </div>
        <div>
          <Route
            path={'/'}
            component={MainPage}
          />
        </div>
      </section>
      
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
