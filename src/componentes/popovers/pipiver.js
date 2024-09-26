import React, {useState, useEffect} from 'react'
import Popover from '@mui/material/Popover';
import PerfilPipiver from './perfilPipiver';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "gatsby"
import CerrarSesion from '../cerrarSesion/cerrar_sesion';
import { StaticImage } from "gatsby-plugin-image";

export default function Pipiver (){
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [role, setRole] = useState(null);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   
//    const rol = localStorage.getItem('tandem_role')
    useEffect(() => {
    if (typeof window !== 'undefined') {
      setRole(localStorage.getItem('tandem_role'));
    }
  }, []);
   const open = Boolean(anchorEl);
   const id = open ? 'simple-popover' : undefined;

    
   if(role ==='employee'){
     return(
         <>
         <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                <StaticImage className="logoheader"
                    src="../../images/acceso.png"
                    loading="eager"
                    width={80}
                    height={80}
                />
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
                    <li>
                      <PerfilPipiver></PerfilPipiver>
                    </li>
                
                     <li>
                        <Link to="/index" style={{textDecoration:'none', marginBottom:'auto'}}>
                            <CerrarSesion >
                            </CerrarSesion>
                        </Link> 
                     </li>
                 </ul>

                 </Typography>

             </Popover>
    
         </>
     )
 }
   if(role ==='admin'){
     return(
         <>
         
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                <StaticImage className="logoheader"
                    src="../../images/acceso.png"
                    loading="eager"
                    width={80}
                    height={80}
                />
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

                 <ul style={{color:'red', listStyle:'none'}}>
                    <li>
                      <PerfilPipiver></PerfilPipiver>
                    </li>
                    
                    
                     <li>
                        <Link to="/listUser" className='linkPipiver' style={{textDecoration:'none', marginBottom:'auto'}}>
                            Tabla de usuarios
                        </Link> 
                     </li>
                     
                     <li style={{color:'red'}}>
                            <CerrarSesion >
                            </CerrarSesion>
                     </li>
                 </ul>

                 </Typography>

             </Popover>

         </>
     )
 }

  
};
