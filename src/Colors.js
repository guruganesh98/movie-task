import "./App.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const AddColor = () => {
  const [colors, setColors] = useState();
  const styles = { background: colors };
  const [colorsList, setColorsList] = useState([]);
  return (
    <div>
      <TextField
        aria-label={colors}
        placeholder="Enter a color"
        style={styles}
        onChange={(event) => setColors(event.target.value)} />
      <Button className="colorButton" onClick={() => setColorsList([...colorsList, colors])}>AddColors</Button>
      {colorsList.map((clr) => (<ColorBox cool={clr} />))}

    </div>
  );
}
function ColorBox({ cool }) {
  const styles = {
    height: "20px",
    width: "200px",
    background: cool,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

export default AddColor