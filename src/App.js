import React from 'react'
// CSS
import './App.css'
import Admin from './components/Admin'
import Card from './components/Card'
import Header from './components/Header'

import withFirebase from './hoc/withFirebase'

const App = (props) => {
  const cards = Object.keys(props.recettes)
      .map(key => <Card key={key} details={props.recettes[key]}/>)

  return (
    <div className='box'>
      <Header pseudo={props.match.params.pseudo} />
      { cards }
      <Admin
        pseudo={props.match.params.pseudo}
        recettes={props.recettes}
        ajouterRecette={props.ajouterRecette}
        majRecette={props.majRecette}
        suppimerRecette={props.supprimerRecette}
        chargerExemple={props.chargerExemple}
      />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent