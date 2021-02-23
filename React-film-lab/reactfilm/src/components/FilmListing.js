// FilmListing.js
import {FilmRow} from './FilmRow';
import {useState} from 'react'

import React from 'react'
export const FilmListing = (props) => {
    // state component
    const allFilms = props.films.map(film =>{
        return <FilmRow title ={film.title} year ={film.release_date} posterUrl={'https://image.tmdb.org/t/p/w780/'+ film.poster_path} onFaveToggle = { ()=> {props.onFaveToggle(film) }} isFave={props.faves.includes(film)} />
        // it works with nested func 
        // handleFaveToggle = { ()=> {props.handleFaveToggle(film) }}
        // onFaveToggle={props.onFaveToggle} 
    })

    const [filter, setFilter] = useState('all')

    // functional comp 
    const handleFilterClick = (filter) => {
        setFilter(filter)
        console.log('Setting filter to' ,filter);
    }
     
    // invokin
    // props.handleFaveToggle (film)

    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div className={"film-list-filter" + (filter === 'all' ? ' is-active' : '' )} onClick={() => handleFilterClick('all')} >
                ALL
                <span className="section-count">{props.films.length}</span>
            </div>
            <div className={"film-list-filter" + (filter === 'faves' ? ' is-active' : '' )} onClick={() => handleFilterClick('faves')}>
                FAVES
                <span className="section-count">{props.faves.length}</span>
            </div>
        </div>
    
        {allFilms}
    </div>
    )
}