/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PokeGuesser from "./pokemon.jsx";
import PokeBall from "./pokeball.jsx";

var pokemonDiv = document.getElementById('pokemon')

if (pokemonDiv) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <PokeGuesser />,
      pokemonDiv.appendChild(document.createElement('div')),
    )
  })
}

var pokeballDiv = document.getElementById('pokeball')

if (pokeballDiv) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <PokeBall />,
      pokeballDiv.appendChild(document.createElement('div')),
    )
  })
}
