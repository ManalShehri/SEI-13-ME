import './App.css';
// import React, useState & useEffect from react here
import { useState, useEffect } from 'react'
import axios from 'axios';

// import axios from axios

function App() {
	const [family, setFamily] = useState([])

	useEffect(() => {
		// Rick and Morty API
		// const RickAndMortyAPI =
		axios.get('https://rickandmortyapi.com/api/character').then((res) => {
			console.log(res.data.results);
			const RickAndMortyFamily = [res.data.results[0],res.data.results[1],res.data.results[2],res.data.results[3],res.data.results[4]]
			setFamily(RickAndMortyFamily)
		})
		// console.log(family)

		})
		// console.log(family)
		
		const allFamily = family.map((ele, id) => {
			return <> <div className="card">
			<h2>{ele.name}</h2>
			<img src={ele.image}/>
		  </div>
		  </>
		})
	return (<div className='App'>{allFamily}</div>);
}

export default App;
