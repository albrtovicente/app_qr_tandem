import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function PopoverInstr() {
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
      <Button aria-describedby={id} variant="contained" style={{color: `white`,backgroundColor: `#4e517a`}} onClick={handleClick}>
        Instrucciones
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
          <p>
          1.En la página principal del generador, verás opciones para diferentes tipos de datos que puedes codificar. Estos pueden incluir:

            URL: Para enlaces de sitios web.
            Texto: Para cualquier tipo de texto libre.
            Localización: Para cualquier tipo de ubicacion geográfica.
          </p>
          <p>
          2.Tamaño: Busca las opciones para ajustar el tamaño del código QR. Esto puede ser un control deslizante o un campo numérico donde puedes especificar el tamaño en píxeles.<br/>
          </p>
          <p>
          3.Color: Selecciona la opción para cambiar el color del código QR. Puedes elegir colores tanto para el fondo como para los elementos del código. Asegúrate de mantener un buen contraste para que el código sea legible.<br/>
          </p>
          <p>
          4.Formato de Descarga: Elige el formato en el que deseas descargar tu código QR. Las opciones comunes incluyen:<br/>
          <br/>PNG: Ideal para uso en web y digital.
          <br/> SVG: Vectorial, útil para impresión de alta calidad.
          <br/> Jpeg: Joint Photographic Experts Group.
          </p>

        </Typography>
      </Popover>
    </div>
  );
}         