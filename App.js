import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './App.css';

/*Rick&Morty
Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que devuelva todos los personajes. Muestra en un div las fotos y los nombres.
Añade un botón de página siguiente que muestre los siguientes 10 personajes y un botón de página anterior que muestre los 10 personajes anteriores.
*/

function App() {
  // Usamos un useState con undefined para poder usarlo luego en una ternaria para que cargue la info de la API:
  let [rickInfo, setRickInfo] = useState(undefined)
  let rickList = "2";

  // Utiliza useEffect para hacer fetch en React
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${rickList}`)
      .then(response =>
        response.json()
      )
      .then(res => setRickInfo(res))
  }, [])
  useEffect(() => {
    console.log(rickInfo);

  }, [rickInfo])

  return (
    <>
      <Router>
        <div>
          {/* Usamos una ternaria que establece qué sucede si rickInfo NO es undefined, y qué sucede si lo es: */}
          {rickInfo !== undefined ?
		  // Eso es la condicion que tiene que cumplir. Si rickInfo !== undefined, pasa lo siguiente
		   rickInfo.results.map((rickmorty) => { return (<p>{rickmorty.name}<img src={rickmorty.image} /></p>) }) 
		 // Y si no, pasa esto => (en momento cuando no se carga la pagina) 
		   : <>LOADING...</>}
        </div>
      </Router>
    </>
  );
}

export default App;
