import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { POKEMON_API_URL } from "./config";


function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(`${POKEMON_API_URL}?limit=151`)
      .then((response) => {
        if(response.status === 200 && response.status <= 300){
          console.log(response.data.results);
          setPokemons(response.data.results);
        }
      })
  }, [])

  
  return (
    <>
    <Navbar/>
  
    <div className="w-full max-w-[1440px] mx-auto p-10">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

     
     {pokemons.map((pokemon, index) => (
   
      <Card key={index} pokemon={pokemon} index={index}/>


      
     ))}
     </div>
    </div>
    </>
  );
}

export default App;
