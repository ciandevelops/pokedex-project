import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { POKEMON_API_URL, POKEMON_IMAGE_API } from "./config";


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
      <div key={index} className="flex flex-col justify-center items-center border border-black rounded-md py-4">
                <img className="hover:scale-125 cursor-pointer" src={`${POKEMON_IMAGE_API}${index+1}.png`} alt="pokemon" />
        <h1>{pokemon.name[0].toUpperCase()+ pokemon.name.substring(1)}</h1>

      </div>
     ))}
     </div>
    </div>
    </>
  );
}

export default App;
