import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

const PizzaOrdered = () => {
  const [open, setOpen] = useState(false);

  const handleClickToggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickToggle} className="btn">
        Beställ
      </Button>
      <Dialog open={open}>
        <div className="dialog">
          <DialogTitle>Tack för beställningen!</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Din beställning har mottagits.
            </Typography>
          </DialogContent>
          <DialogActions >
            <Button className="action-btn" onClick={handleClickToggle}>X</Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default PizzaOrdered;
