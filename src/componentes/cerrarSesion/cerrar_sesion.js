import React from 'react'
import { Link } from 'gatsby';

const CerrarSesion = () => {
  const handleCerrarSesion =()=>{
    window.location.href='/';

    localStorage.removeItem('tandem_role');
    localStorage.removeItem('tandem_id');
    localStorage.removeItem('tandem_email');
    // localStorage.removeItem('tndm_token');
  
    window.location.href='/login'
  }

  return (
    <>
      <Link onClick={handleCerrarSesion} to='/index' style={{textDecoration:'none', marginBottom:'auto', color:'red'}}>Cerrar sesión</Link>
    </>
  )
}

export default CerrarSesion