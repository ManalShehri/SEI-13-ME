// bring in React and Component from React

import React from 'react';

// define our Movie component
const Movie = () => {
  // what should the component render?
//   function Render ()  {
    // make sure to return some UI
    // make sure to return some UI
    const movies = [
        {
        title: 'Lord of rings'
        },
        {
        title: 'Lion King'
        },
        {
        title: 'some movie'
        },
        {
        title: 'Lord of the React: Fellowship of React Components'
        },
        {
        title: 'Lord of 111'
        },
    ]
  
      return (
          movies.map(movie=><li>{movie.title}</li>)
      )
  }
// }

export default Movie