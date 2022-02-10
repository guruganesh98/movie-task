import {useState} from "react"
import { useParams } from "react-router-dom"
import {useHistory} from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




const EditMovie=({films, setFilms})=>{

    const {id}= useParams();
    const edit = films[id];
    const history= useHistory();
  const [name, setName]= useState(edit.name);
  const [url, setUrl]= useState(edit.url);
  const [rating, setRating]= useState(edit.rating);
  const [awards, setAwards]= useState(edit.awards);
  const [genre, setGenre]= useState(edit.genre);
  const [synopsis, setSynopsis]= useState(edit.synopsis);
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
        <Button
        onClick={() => {
          const updatedMovie = {
            name: name,
            url: url,
            rating: rating,
            awards: awards,
            genre: genre,
            synopsis: synopsis,
            trailer: trailer
          };
          const copyMovieList = [...films];
          copyMovieList[id] = updatedMovie;
          setFilms(copyMovieList);
          history.push("/movies");
        }}
        variant="contained"
        color="success"
      >
        Save
      </Button>
        </div>
        </div> 
    )
}



export default EditMovie