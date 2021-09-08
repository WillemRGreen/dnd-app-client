import './App.css';
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Sharpshooter from './Sharpshooter/Sharpshooter'
import MainPage from './MainPage/MainPage';
import MonsterDamage from './MonsterDamage/MonsterDamage';

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
            path={'/monsterdamage'}
            component={MonsterDamage}
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
