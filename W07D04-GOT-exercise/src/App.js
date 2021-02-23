
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {

  const [characters, setCharacters] = useState([])
  const [houses, setHouses] = useState([]) 

  const names = ['Jon Snow','Petyr Baelish','Tyrion Lannister','Daenerys Targaryen']

  useEffect(() => {
    // loop for links 
    const links = names.map(ele => {
      return axios.get('https://api.got.show/api/show/characters/'+ ele)
    })  

    axios.all(links).then(((responses) => {
      const charRes = responses
      const housesLinks = charRes.map(ele => {
        return axios.get('https://api.got.show/api/show/houses/'+ele.data.house);
      })
      
      axios.all(housesLinks).then(((responses) => {
        const housRes = responses
        const houseData = housRes.map(ele => {
          return {
            seat: ele.data[0].seat,
            logoURL: ele.data[0].logoURL
          }           
        })

        setHouses(houseData)

      })).catch(errors => {
        console.log(errors)
      })

      // for each charcter
      const charecterData = charRes.map(ele => {
        return {
          name: ele.data.name,
          image: ele.data.image,
          house: ele.data.house
        }           
      })
      setCharacters( charecterData )

    })).catch(errors => {
      console.log(errors)
    })
    
  }, [])

  const allCharecters = characters.map(ele => {
    return <> <div className="card">
      <h2>{ele.name}</h2>
      <img src={ele.image}/>
      <p><b>House:</b> {ele.house} </p>
    </div>
    </>
  })

  const allHouses = houses.map(ele => {
    return <> <div className="card">
      <img src={ele.logoURL}/>
      <p><b>seat:</b> {ele.seat[0]}</p>
    </div>
    </>
  })

  return (
    <div>
      <div className="clear">
      <h1>Charecters</h1>
        {allCharecters}
      </div>
      <div className="clear">
      <h1>Houses</h1>
        {allHouses}
      </div>
    </div>
  );
}

export default App;
