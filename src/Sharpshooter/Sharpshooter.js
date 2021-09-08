import React, { Component } from 'react'
import GenericForm from '../GenericForm/GenericForm'
import './Sharpshooter.css'

export default class Sharpshooter extends Component {

    static defaultProps = {
        history: {
          push: () => { }
        },
      }

      state = {
          acResult: 0,
          attackBonus: 0,
          damageDie: 0,
          damageBonus: 0,
          displayResult: false,
          error: false
        
      }

      handleSubmit = e => {
          e.preventDefault()
          let result = this.state.attackBonus - this.state.damageDie+this.state.damageBonus/2 + 16
          this.setState({acResult: result, displayResult: true})
      }

      handleAttackBonusChange = e => {
        e.preventDefault()
        this.setState({attackBonus:parseInt(e.currentTarget.value)})
      }

      handleDamageDieChange = e => {
        e.preventDefault()
        this.setState({damageDie:parseInt(e.currentTarget.value)})
      }

      handleDamageBonusChange = e => {
        e.preventDefault()
        this.setState({damageBonus:parseInt(e.currentTarget.value)})
      }

    render(){
        let resultDisplay = ''
        if(this.state.displayResult === true){
            resultDisplay = 
                <div className='result'>
                    <p>
                        Do not use your -5 bonus if the enemy's AC is higher than {this.state.acResult}
                    </p>
                </div>
        }
        return (
            <section>
                <h2>
                    Sharpshooter/Great Weapon Master Calculator
                </h2>
                <GenericForm onSubmit={this.handleSubmit}>
                    <div className='input-div'>
                        <label htmlFor='attack-bonus'>
                            Your Attack Bonus
                        </label>
                        <input onChange={this.handleAttackBonusChange} name='attack-bonus' className='attack-bonus' placeholder='attack bonus'></input>
                    </div>

                    <div className='input-div'>
                        <label htmlFor='damage-die'>
                            Your Damage Die (number only)
                        </label>
                        <input onChange={this.handleDamageDieChange} name='damage-die' className='damage-die' placeholder='damage-die'></input>
                    </div>

                    <div className='input-div'>
                        <label htmlFor='damage-bonus'>
                            Your Damage Bonus
                        </label>
                        <input onChange={this.handleDamageBonusChange} name='damage-bonus' className='damage-bonus' placeholder='damage-bonus'></input>
                    </div>

                    <div className='submit'>
                        <button type = 'submit' className='submit-button'>
                            See Result
                        </button>
                    </div>
                </GenericForm>
                {resultDisplay}
                <Link to={'/'}>
                        <button className = 'item'>
                            Back to Main
                        </button>
                </Link>
            </section>
            
        )
    }
}