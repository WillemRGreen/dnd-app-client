import React, { Component } from 'react'
import GenericForm from '../GenericForm/GenericForm'

export default class MonsterDamage extends Component {
    static defaultProps = {
        history: {
          push: () => { }
        },
      }

      state = {
          party: [],
          enemies: []
      }

      createPartyMember (attackBonus, numOfAttacks, damageDie, damageBonus, hitPoints){
        let newPartyMember = {
            attackBonus,
            numOfAttacks,
            damageDie,
            damageBonus,
            hitPoints
        }
        this.setState({party: [...this.this.state.party, newPartyMember]})
      }

      createEnemy (attackBonus, numOfAttacks, damageDie, damageBonus, hitPoints){
        let newEnemy = {
            attackBonus,
            numOfAttacks,
            damageDie,
            damageBonus,
            hitPoints
        }
        this.setState({party: [...this.this.state.enemies, newEnemy]})
      }

    render() {
        return (
            <section>
                
            </section>
        )
    }
}