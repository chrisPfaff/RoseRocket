import React from 'react'
import { hot } from 'react-hot-loader'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img
            className="header__img"
            src="https://s3-ap-south-1.amazonaws.com/fp-files-ap-south-1/4e732ced3463d06de0ca9a15b6153677/f964a86339e6f42870fa67dcc8b2dd42/original/rr-logo.png"
            alt="rose rocket logo"
          />
        </div>
        <div className="container">
          <h1>Rose Rocket Driver Location Challenge</h1>
          <form className="container__form" action="changePosition">
            <label htmlFor="progress" id="percentDone">
              % Progress
            </label>
            <textarea name="percentDone" id="percentDone" cols="5" rows="1" />
            <select name="activeLeg" id="activeLeg">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="N">N</option>
              <option value="O">O</option>
              <option value="P">P</option>
              <option value="Q">Q</option>
              <option value="R">R</option>
              <option value="S">S</option>
              <option value="T">T</option>
              <option value="U">U</option>
              <option value="V">V</option>
              <option value="W">W</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
          </form>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
