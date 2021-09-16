import { useQuery } from "@apollo/client";
import Card from "./components/Card/Card";
import Loader from "./components/Loader/Loader";
import getAllCharacters from "./querys";
import './styles/main.style.css'


function App() {
 
  const {loading, error, data} = useQuery(getAllCharacters, {
    variables: {page: 1}
  })
 
 if (loading) return <Loader/>
 if (error) return <h1>Opss, something wrong</h1>
  return (

    <div className='wrapper'>
    <header className="text-center">
      <h1 className='text-center mt-3 '>The Rick and Morty</h1>
      <h2 className='text-center mb-3'>multiverse</h2>
    
    </header>
    <div className="gri ">
      {data?.characters?.results.map(character=>{
        return <Card character={character} key={character.id}/>
      })}
    </div>
    </div>
  );
}

export default App;
