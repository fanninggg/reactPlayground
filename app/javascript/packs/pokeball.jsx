import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import pokeballTop from 'images/pokeballTop.png'
import pokeballBottom from 'images/pokeballBottom.png'
import pokeballWhole from 'images/pokeballWhole.png'

class PokeBall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  openTheFloodgates() {
    document.getElementById('left-side').classList.add('openFloodgateOne')
    document.getElementById('right-side').classList.add('openFloodgateTwo')
    setTimeout( () => {
      document.getElementById('left-side').classList.add('d-none')
      document.getElementById('right-side').classList.add('d-none')
    }, 3000)
  }

  initiateOpening() {
    const pokeball = document.getElementById('pokeball-id')
    console.log('Open Sesame')
    pokeball.style.transform = pokeball.style.transform + "rotate(-90deg)"
    document.getElementById('pokeball-id').classList.add('rotate')
    setTimeout(function() {
      pokeball.style.transition = "0.1s"
      pokeball.style.transform = pokeball.style.transform + "scale(0.95)"
      setTimeout(function() {
        document.getElementById('pokeball-id').classList.add('inactive')
        this.openTheFloodgates()
      }.bind(this), 500)
    }.bind(this), 1200)
  }

  render() {
    return(
      <div className="pokeball-container">
        <div id ="left-side" className="left-side">
          <div className="door-rivets">
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
          </div>
        </div>
        <div id ="right-side" className="right-side">
          <div className="door-rivets">
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
            <img src={pokeballWhole} alt="" className="pokemonRivets"/>
          </div>
        </div>
        <div id="pokeball-id" className="pokeball" onClick={this.initiateOpening.bind(this)}>
          <img src={pokeballWhole} alt=""/>
        </div>
      </div>
    )
  }
}

export default PokeBall

