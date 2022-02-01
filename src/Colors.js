import { useState } from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function AddColor() {
  const [colors, setColors] = useState();
  const styles = { background: colors };
  const [colorsList, setColorsList] = useState([]);
  return (
    <div>
      <TextareaAutosize
        aria-label={colors}
        placeholder="Enter a color"
        style={styles}
        onChange={(event) => setColors(event.target.value)} />
      <button onClick={() => setColorsList([...colorsList, colors])}>AddColors</button>
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
