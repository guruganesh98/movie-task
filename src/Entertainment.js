import { useState } from "react";
import Button from '@mui/material/Button';
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




export function Entertainment({ movie, poster, imdb, theme, summary, success, deleteButton}) {
  const styles = { color: imdb >= 7.5 ? "green" : "red" };
  const [toggle, setToggle] = useState(false);

  return (
    <Card className="movies">
      <CardContent className="eachMovie">
        <img src={poster} className="moviePoster" alt="pics" />
        <div className="info">
          <h2>{movie}</h2>
          <p className="type">{theme}</p>
          <div style={styles} className="ratings">
            <img src="https://m.media-amazon.com/images/G/01/imdb/images/social/imdb_logo.png" alt="imdb" /><p>{imdb}</p><img src="https://cdn1.iconfinder.com/data/icons/hand-signs-emotions-bright-flat-design/128/star-favorite-rating-important-512.png" alt="star" />

          </div>
          <p className="awards">{success}</p>
          <div className="buttons">
          <Button onClick={()=>setToggle(!toggle)} variant="contained"> {toggle ? <ExpandLessIcon/> : <ExpandMoreIcon/>}</Button>
          <Counter />
          {deleteButton}</div>
          {toggle ? <p className="movieSummary"><i>{summary}</i></p> : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default Entertainment