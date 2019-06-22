import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'

class PokeGuesser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPokemonName: "",
      currentPokemonImage: "",
      fakePokeArray: [],
      gameMessage: ``,
      allOptions: []
      // streak: 0
    }
  }

  componentDidMount() {
    this.getPokemon()
  }

  randomPokemon() {
    return Math.floor(Math.random() * 151) + 1
  }

  getPokemon() {
    this.setState({ gameMessage: `` })
    document.getElementById('pokeImage').classList.remove('reveal')
    document.getElementById('pokemonName').classList.add('inactive')
    const pokeNumber = this.randomPokemon()
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`
    })
      .then(response => {
        const pokeSprite = response.data.sprites.front_default
        const pokeName = response.data.name
        this.setState({ currentPokemonName: pokeName, currentPokemonImage: pokeSprite })
      });
      this.buttons()
  }

  buttons() {
    const pokeGuesses = []

    for (let i of Array(4).keys()) {
      const pokeNumber = this.randomPokemon()
      axios({
          method: 'get',
          url: `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`
      })
        .then(response => {
          const pokeName = response.data.name
          pokeGuesses.push(pokeName)
          this.setState({ fakePokeArray: pokeGuesses })
        })
    }
    document.querySelectorAll('.button').forEach(function (button) {
      button.classList.remove('inactive')
      button.classList.remove('wrong')
    })
  }

  guess(passedProp) {
    if (passedProp == this.state.currentPokemonName) {
      document.getElementById('pokemonName').classList.remove('inactive')
      document.getElementById('pokeImage').classList.add('reveal')
      setTimeout(() => {
        // this.setState({ streak: this.state.streak += 1 })
        this.getPokemon()
      }, 2000)
    } else {
      // this.setState({ streak: 0 })
      document.getElementById(`${passedProp}`).classList.add('wrong')
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    const correctArray = []
    correctArray.push(this.state.currentPokemonName)
    console.log(this.state.currentPokemonName)
    const allGuesses = this.state.fakePokeArray.concat(correctArray)
    const shuffledArray = this.shuffle(allGuesses)
    return(
      <div className="wtpContainer">
        <div className="buttons">
          <p id={shuffledArray[0]} className="button inactive" onClick={() => this.guess(shuffledArray[0])}>{shuffledArray[0]}</p>
          <p id={shuffledArray[1]} className="button inactive" onClick={() => this.guess(shuffledArray[1])}>{shuffledArray[1]}</p>
          <p id={shuffledArray[2]} className="button inactive" onClick={() => this.guess(shuffledArray[2])}>{shuffledArray[2]}</p>
          <p id={shuffledArray[3]} className="button inactive" onClick={() => this.guess(shuffledArray[3])}>{shuffledArray[3]}</p>
          <p id={shuffledArray[4]} className="button inactive" onClick={() => this.guess(shuffledArray[4])}>{shuffledArray[4]}</p>
        </div>
        <img src={this.state.currentPokemonImage} alt="" className="hiddenPokemon" id="pokeImage"/>
        <div>
          <p onClick={this.getPokemon.bind(this)} className="newGameButton">New Pokémon</p>
          <div className="gameMessageHolder">
            <p id="pokemonName" className="pokemonName inactive">It's {this.state.currentPokemonName}!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PokeGuesser;
