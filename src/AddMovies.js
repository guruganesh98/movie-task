import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import {useHistory} from "react-router-dom"





function AddMovies({films, setFilms}){

  const history= useHistory();
  const [name, setName]= useState([]);
  const [url, setUrl]= useState([]);
  const [rating, setRating]= useState([]);
  const [awards, setAwards]= useState([]);
  const [genre, setGenre]= useState([]);
  const [synopsis, setSynopsis]= useState([]);
  const [trailer, setTrailer]= useState([]);
    return(
     <div>
        <div className="movieDetails">
        <TextField
        label="Name"
        focused  onChange={(event)=> setName(event.target.value)}
        />
        <TextField
        label="URL"
        focused  onChange={(event)=> setUrl(event.target.value)}
        />
        <TextField
        label="Rating"
        focused onChange={(event)=> setRating(event.target.value)}
        />
        <TextField
        label="Awards"
        focused  onChange={(event)=> setAwards(event.target.value)}
        />
        <TextField
        label="Genre"
        focused onChange={(event)=> setGenre(event.target.value)}
        />
        <TextField
        label="Synopsis"
        focused onChange={(event)=> setSynopsis(event.target.value)}
        />
         <TextField
        label="Trailer"
        focused  onChange={(event)=> setTrailer(event.target.value)}
        />
        </div>
        <div className="addButton">
        <Button variant="contained" color="success" onClick={()=>{
          const addNewMovie={
            name: name,
            url: url,
            rating: rating,
            awards: awards,
            genre: genre,
            synopsis: synopsis,
            trailer: trailer
          };    setFilms([...films, addNewMovie]);
          history.push("/movies");
        }}>Add Movie</Button>
        </div>
        </div> 
    )
}

export default AddMovies