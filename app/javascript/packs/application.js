/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Skills from "./workflow";


var skillsDiv = document.getElementById('skills')

if (skillsDiv) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Skills />,
      skillsDiv.appendChild(document.createElement('div')),
    )
  })
}
