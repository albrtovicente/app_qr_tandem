import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function PopoverComp({text}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <a onClick={handleClick} >Saber Más</a> 
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'left',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }} style={
          {
            width:`200px`,
            background:`rgba(200,200,200, .8)`
            

          }}>
          <p>
           {text}
          </p>

        </Typography>
      </Popover>
    </div>
  );
}         