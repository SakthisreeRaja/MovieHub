import './App.css'
import Search from './Components/Search.jsx'
import { useEffect,useState } from 'react'

const API_BASE_URL='https://www.omdbapi.com/';
const API_KEY=import.meta.env.VITE_OMDb_API_KEY;
// const API_OPTIONS={
//   method: 'GET',
//   headers: {
//     accept: 'application/json'
//     // Authorization: `Bearer ${API_KEY}`,
//   }
// }

const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const [errorMessage,setErrorMessage]=useState('');

  const fetchMovies = async()=>{
    try{
      const endpoint = `${API_BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`
      const response = await fetch(endpoint)
      if(!response.ok){
        throw new Error(`Failed to Fetch Movies`)
      }
      const data = await response.json()
      console.log("Movies Fetched");
      console.log(data)
    }catch(error){
      console.error(`Error Fetching Movies:${error}`);
      setErrorMessage(`Error while Fetching Movies, Please try again later.`)
    }
  }

  useEffect(()=>{
    fetchMovies()
  },[searchTerm])
  
  return (
    <main>
      <div className='pattern'></div>
      <div className='wrapper'>
          
          <header>
            <img src='./hero.png' alt='Hero Banner'/>
            <h1>Find <span className='text-gradient'>Movies</span> And <span className='text-gradient-red'>Series</span> That Moves Your Soul</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className='all-movies'>
            <h2>All Movies</h2>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
          </section>
          
      </div>
    </main>
  )
}
export default App
