import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import './components/App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import axios from 'axios'
import SearcBox from './components/SearchBox';


const App = () => {
 
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
 
  const getMovieRequest = async (searchValue) => {
   const getRequest = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=b6667d5f`);
   if (getRequest.data){
     setMovies(getRequest.data);
   }
   console.log(getRequest);
     
   
   
   
  }
 useEffect(() => {
   getMovieRequest(searchValue);
 }, [searchValue])
  
  
  return (
    <div className="container-fluid movie-app">
       <div className=" d-flex align-items-center mt-4 mb-4">
         <MovieListHeading heading='Movies' /> 
         <SearcBox searchValue={searchValue} setSearchValue={setSearchValue}/>
       </div>
     <div className="row">
       <div className="col">
       <MovieList movies={movies}/>
     </div>
     {/* <div className="row">
       <div className="col">
         <MovieList />
       </div>
     </div> */}
     </div>
    </div>
    
  );
};
export default App;
