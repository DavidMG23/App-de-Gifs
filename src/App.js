import './App.css';
import React from 'react'
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App de Gifs</h1>
        <Link to='/gif/messi'>Gifs de Messi</Link>
        <Link to='/gif/goku'>Gifs de Goku</Link>
        <Link to='/gif/motos'>Gifs de Motos</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword' 
        />
      </section>
    </div>
  )
}

export default App;
