import { useParams } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useHistory } from "react-router-dom"


const AboutMovie= ({AllMovies}) => {

    const {id}= useParams()
    const MyMovie= AllMovies[id];
    const history = useHistory();
    return(
        <div>
       <iframe className="movieTrailer" width="100%" height="550"
        src= {MyMovie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
        <div className="details">
         <div className="oneMovie">
       <h1 className="movieTitle">{MyMovie.name} -</h1>
       <h2 className="movieTitle">{MyMovie.genre}</h2>
       </div>
         <div  className="rating">
         <img src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png" alt="imdb" /><p>{MyMovie.rating}</p><img src="https://cdn1.iconfinder.com/data/icons/hand-signs-emotions-bright-flat-design/128/star-favorite-rating-important-512.png" alt="star" />
         </div>
         <i>{MyMovie.synopsis}</i>
         <div className="backButton">
         <Button
          onClick={() => history.goBack()}
          variant="disable"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
        </div>
         </div>
         </div>
    )
}

export default AboutMovie