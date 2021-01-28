import React, { Component } from 'react'
// CSS
import './App.css'
import Admin from './components/Admin'
import Card from './components/Card'
import Header from './components/Header'
import recettes from './recettes'

// firebase
import base from './base'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {},
      update: false
    }
    console.log('Constructor')
  }

  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
    this.setState({ update: true })
    console.log('ComponentDidMount')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes }
    recettes[key] = null
    this.setState({ recettes })
  }

  chargerExemple = () => {
    this.setState({ recettes })
  }

  render () {
    console.log('render')
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]}/>)

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        { cards }
        <Admin
          recettes={this.state.recettes}
          pseudo={this.state.pseudo}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          suppimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple}
        ></Admin>
      </div>
    )
  }
}

export default App
