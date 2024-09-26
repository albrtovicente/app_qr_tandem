import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function PerfilPipiver (){
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   

   

   const rol = localStorage.getItem('tandem_role')
   const deleg = localStorage.getItem('tandem_delegacion')
   const nombre = localStorage.getItem('tandem_nombre')
   const email = localStorage.getItem('tandem_email')
    
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;
return(
    <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
           Perfil              
        </Button> 
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <Typography sx={{ p: 2 }}  style={{}}>
 
                <ul>
                    <li>Nombre: {nombre}</li>
                    <li>Email: {email}</li>
                    <li>Delegacion: {deleg}</li>
                    <li>Rol: {rol}</li>
                </ul>
            
            </Typography>
        </Popover>
    </div>
)
};
                               