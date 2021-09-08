import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MainPage.css'

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to={'/sharpshooter'}>
                        <button className = 'item'>
                            Sharpshooter Calc
                        </button>
                    </Link>
                    <Link to={'/monsterdamage'}>
                        <button className = 'item'>
                            Monster Damage Calculator
                        </button>
                    </Link>
                </nav>
            </div>
        )
    }
}