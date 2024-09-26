import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { StaticImage } from 'gatsby-plugin-image';
import "../opc/opc.css"


function Opciones2(props) {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div className='opciones'>
      <h5>Formato</h5>
      <div className='imagenes'>
        <div className='img'>
          <StaticImage
            src="../images/formato/formatosvg.png"
            height={"300px"}
          />
        </div>

      </div>
      <p>(seleccione alguna opción)</p>
      <ButtonGroup>
        <Button
          className='button'
          color="primary"
          outline
          onClick={() => setRSelected("Url")}
          active={rSelected === 1}
        >
          Url
        </Button>
        <Button
          className='button'
          color="primary"
          outline
          onClick={() => setRSelected("Texto")}
          active={rSelected === 1}
        >
          Texto
        </Button>
        <Button
          className='button'
          color="primary"
          outline
          onClick={() => setRSelected("Lugar")}
          active={rSelected === 1}
        >
          Lugar
        </Button>
      </ButtonGroup>
      <p>Selected: {JSON.stringify(rSelected)}</p> 
    </div>
  );
}

export default Opciones2;