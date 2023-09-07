import { Button } from '@mui/material';

import './styles.css';
import SendIcon from '@mui/icons-material/Send';
export const MaterialUIBasicElements = () => {
  return (
    <div>
      <Button variant="contained">Kliknij mnie</Button>

      <Button viariant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
};
