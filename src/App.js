import axios from "axios";
import { useEffect } from "react";
import { POKEMON_API_URL } from "./config";


function App() {
  useEffect(() => {
    axios.get(`${POKEMON_API_URL}?limit=151`)
      .then((response) => {
        if(response.status === 200 && response.status <= 300){
          console.log(response.data.results);
        }
      })
    
  }, [])
  
  return (
    <div className="App">
     <h1>Hello World</h1>
    </div>
  );
}

export default App;
