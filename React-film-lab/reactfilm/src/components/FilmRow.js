import React from 'react'
import {FilmDetails} from './FilmDetails'
import Fave1 from './Fave1'

export const FilmRow = (props) => {
    const year = new Date(props.year)
    // functional comp 
    const handleDetailsClick = (film) => {
        // e.preventDefault();
        console.log('Fetching details for' ,film);
    }
    return (
        <div className="film-row">
            <div className="film-summary" onClick={() => handleDetailsClick(props.title)}>
                <img src={props.posterUrl} alt="" />
                <h1>Title : {props.title}</h1>
                <p>Year : {year.getFullYear()}</p>
                <Fave1 onFaveToggle = {props.onFaveToggle} isFave={props.isFave}/>
            </div>
        </div>
    )
}
