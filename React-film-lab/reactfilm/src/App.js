import {FilmListing} from './components/FilmListing.js';
import {FilmDetails} from './components/FilmDetails';
import './App.css';
import { useState } from 'react'
// import TMDB from '../../TMDB';
import TMDB from './API/TMDB'

function App() {
    const [films, serFilms] = useState(TMDB.films)
    const [faves, setFaves] = useState([])
    const [current, setCurrent] = useState({})

    const handleFaveToggle = (film) => {
      const newFaves = faves.slice() //copy the array
      const filmIndex = newFaves.indexOf(film)
      // If the film is already in their favorites,
      if (filmIndex === -1 )
      {
        console.log(`adding ${film.title} to fave `)
        newFaves.push(film)
      }
      else 
      {
        console.log(`removing ${film.title} to fave `)
        newFaves.splice(filmIndex, 1)
      }

      setFaves(newFaves);
      // console.log('some text')
      // return newFaves
    }
    
    return (
      <div className="film-library">
        <FilmListing films={films} faves={faves} onFaveToggle = {handleFaveToggle} />
        <FilmDetails current={current}/>
      </div>
    );
}

export default App;
