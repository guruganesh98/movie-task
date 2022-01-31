import { useState } from "react";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div>
      <Button color="success" onClick={() => setLike(like + 1)}>👍{like}   <Badge badgeContent={like} color="success">
      </Badge></Button>
      <Button color="error" onClick={() => setDisLike(disLike + 1)}>👎{disLike}    <Badge badgeContent={disLike} color="error">
      </Badge></Button>

    </div>
  );
}
