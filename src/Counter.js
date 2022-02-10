import { useState } from "react";
import IconButton from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ThumbDownIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div className="votes">
      <IconButton color="success" onClick={() => setLike(like + 1)}><ThumbUpIcon/>   <Badge badgeContent={like} color="success">
      </Badge></IconButton>
      <IconButton color="error" onClick={() => setDisLike(disLike + 1)}><ThumbDownIcon/>   <Badge badgeContent={disLike} color="error">
      </Badge></IconButton>

    </div>
  );
}
