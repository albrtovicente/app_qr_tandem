// import React from 'react'
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { StaticImage } from "gatsby-plugin-image";
// import UpdateUser from '../pages/update_user';

// export default function Popoveractualizar (){
//    const [anchorEl, setAnchorEl] = React.useState(null);
//    const handleClick = (event) => {
//      setAnchorEl(event.currentTarget);
//    };
//    const handleClose = () => {
//      setAnchorEl(null);
//    };
   
//    const rol = localStorage.getItem('tandem_role')
//    const open = Boolean(anchorEl);
//    const id = open ? 'simple-popover' : undefined;
//      return(
//          <>
         
//             <Button aria-describedby={id} variant="contained" onClick={handleClick}>
//                 <StaticImage className="logoheader"
//                     src="../images/acceso.png"
//                     loading="eager"
//                     width={80}
//                     height={80}
//                 />
//             </Button> 
            

//              <Popover
//                  id={id}
//                  open={open}
//                  anchorEl={anchorEl}
//                  onClose={handleClose}
//                  anchorOrigin={{
//                  vertical: 'bottom',
//                  horizontal: 'left',
//                  }}
                 
//              >     

//                  <Typography sx={{ p: 2 }}  style={{}}>

//                  <ul>
//                     <li>
//                       <UpdateUser></UpdateUser>
//                     </li>
//                  </ul>

//                  </Typography>

//              </Popover>

//          </>
//      )


  
// };
