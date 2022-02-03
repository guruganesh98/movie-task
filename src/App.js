import "./App.css";
import {useState} from "react";
import { Entertainment } from "./Entertainment";
import { Switch, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import AddColor from "./Colors";
import AddMovies from "./AddMovies";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Error from "./Error"


function App() {

  const MyMovieList =[
    {
      name: "DARK KNIGHT",
      url: "https://images.saymedia-content.com/.image/t_share/MTc0Mzk0MTExMDQ5MDgyMjE2/should-i-watch-the-dark-knight.jpg",
      rating: "9.0",
      awards: "2 OSCARS, 159 wins and 163 nominations",
      genre: "2008 ‧ Action/Adventure",
      synopsis:"With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
    },
    
    {
      name: "INCEPTION",
      url: "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
      rating: "8.8",
      awards: "4 OSCARS, 157 wins and 220 nominations",
      genre: "2010 ‧ Action/Sci-fi",
      synopsis:"Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move"
    },

    {
      name: "WATCHMEN",
      url: "https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: "7.6",
      awards: "11 wins and 24 nominations",
      genre: "2009 ‧ Action/Sci-fi",
      synopsis:"In an alternate 1985 America, costumed superheroes are part of everyday life. When one of his former comrades is murdered, masked vigilante Rorschach (Jackie Earle Haley) uncovers a plot to kill and discredit all past and present superheroes. As he reconnects with his retired associates, only one of which has true powers, Rorschach glimpses a far-reaching conspiracy involving their shared past and catastrophic consequences for the world's future."
    },

    { name: "PREDESTINATION",
      url: "https://flxt.tmsimg.com/assets/p11111906_p_v13_au.jpg",
      rating: "7.5",
      awards: "12 wins and 19 nominations",
      genre: "2014 ‧ Sci-fi/Action",
      synopsis:"As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975. The hunt, however, turns out to be beyond the bounds of possibility."
    },

    {
      name: "MAN OF STEEL",
      url: "https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/37/24/WB-0546_po-reg-medium_orig.jpg",
      rating: "7.0",
      awards: "7 wins and 46 nominations",
      genre: "2013 ‧ Action/Adventure",
      synopsis:"With the imminent destruction of Krypton, their home planet, Jor-El (Russell Crowe) and his wife seek to preserve their race by sending their infant son to Earth. The child's spacecraft lands at the farm of Jonathan (Kevin Costner) and Martha (Diane Lane) Kent, who name him Clark and raise him as their own son. Though his extraordinary abilities have led to the adult Clark (Henry Cavill) living on the fringe of society, he finds he must become a hero to save those he loves from a dire threat."
    },

    {
      name: "BATMAN V SUPERMAN",url: "http://posterposse.com/wp-content/uploads/2016/03/Batman-v-Superman-Dawn-of-Justice-poster.jpg",
      rating: "6.4",
      awards: "14 wins and 33 nominations",
      genre: "2016 ‧ Action/Adventure",
      synopsis:"It's been nearly two years since Superman's (Henry Cavill) colossal battle with Zod (Michael Shannon) devastated the city of Metropolis. The loss of life and collateral damage left many feeling angry and helpless, including crime-fighting billionaire Bruce Wayne (Ben Affleck). Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor (Jesse Eisenberg) launches his own crusade against the Man of Steel"
    }
  ]
  const [films, setFilms] = useState(MyMovieList);
  return (
    <div>
      <div>
      <ul>
        <li>
          <Link to="/">Welcome Page</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/colors">Add Colors</Link>
        </li>
        <li>
          <Link to="/addmovie">Add Movie</Link>
        </li>
        </ul>
        </div>
     
    <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/colors">
        <AddColor />
          </Route>
        <Route path="/addmovie">
          <AddMovies films={films} setFilms={setFilms} />
        </Route>
        <Route path="/movies">
        <div>

     
            {films.map(({ name, url, rating, genre, synopsis, awards},index) => (
              <Entertainment 
              key={name}
              movie={name}
              poster={url}
              imdb={rating}
              theme={genre} 
              summary={synopsis} 
              success={awards}
              deleteButton={
                <IconButton aria-label="delete"
                onClick={()=> {
                  const deleteMovie=[...films];
                  deleteMovie.splice(index, 1);
                  setFilms(deleteMovie)
                }}>        <DeleteIcon />
                </IconButton>
              } />
            ))}

        </div>        
        </Route>
        <Route exact path="**">
            <Error />
          </Route>
        </Switch>
        </div>
  );


}

export default App