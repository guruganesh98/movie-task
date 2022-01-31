import { useState } from "react";
import Button from '@mui/material/Button';
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function Entertainment({ movie, poster, imdb, theme, summary, success }) {
  const styles = { color: imdb >= 7.5 ? "green" : "red" };
  const [toggle, setToggle] = useState(false);

  return (
    <div className="movies">
      <div className="eachMovie">
        <img src={poster} className="moviePoster" alt="pics" />
        <div className="info">
          <h2>{movie}</h2>
          <p className="type">{theme}</p>
          <div style={styles} className="ratings">
            <img src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png" alt="imdb" /><p>{imdb}</p><img src="https://cdn1.iconfinder.com/data/icons/hand-signs-emotions-bright-flat-design/128/star-favorite-rating-important-512.png" alt="star" />

          </div>
          <p className="awards">{success}</p>
          {toggle ? <p>{summary}</p> : null}
          <Button onClick={()=>setToggle(!toggle)} variant="contained"> {toggle ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</Button>
        </div>
      </div>
      <Counter />
    </div>
  );
}