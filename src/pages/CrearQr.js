import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useState, useRef } from "react";
import Layout from "../componentes/layout/layout";
import Qrcomponent from "../componentes/qrcomp/qr";
import QRCode from "qrcode.react";
import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from "downloadjs";
import CenteredTabs from "../componentes/tab/tab";
import PopoverInstr from "../componentes/popovers/popoverinstr";
import Pipiver from "../componentes/popovers/pipiver";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ModalTandem from "../componentes/modal/modal";
import GuardarQr from "./guardarQr";
import './CrearQr.css';
import RoleGuest from "./role_guest";




function Crearqr() {
  const [inputValue, setInputValue] = useState('');
  const [latLng, setLatLng] = useState({ lat: 40.030501, lng: -3.604052 });
  const [qrColor, setQrColor] = useState('black');
  const [qrSize, setQrSize] = useState(100);
  const qrRef = useRef(null);
  const [descargado, setDescargado] = useState(false);
  const [inputType, setInputType] = useState('url');
  const [selectedFormat, setSelectedFormat] = useState('png');

  /////////////////
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };
//////////////////////////


  const handleColorChange = (color) => {
    setQrColor(color);
    
  };
  
  const handleSizeChange = (size) => {
    setQrSize(parseInt(size, 10));
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleDownload1 = async () => {
    if (qrRef.current) {
      let dataUrl;
      if (selectedFormat === 'png') {
        dataUrl = await toPng(qrRef.current);
        setDescargado(true);
      } else if (selectedFormat === 'jpeg') {
        dataUrl = await toJpeg(qrRef.current);
        setDescargado(true);
      } else if (selectedFormat === 'svg') {
        dataUrl = await toSvg(qrRef.current);
        setDescargado(true);
      }
      download(dataUrl, `qr-code.${selectedFormat}`);
    }
  };

  const containerStyle = {
    backgroundColor: "beige",
    border: "2px solid black",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  const colorOptions = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink', 'magenta'];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let rol = null;
  if (typeof window !== "undefined") {
    rol = localStorage.getItem('tandem_role');
  }
  
   if(rol=='guest'){
    return (
      <>
      <Layout>
            <RoleGuest></RoleGuest>
          
        </Layout>
        
      </>
    );
   }else{
    return(
        <>
        <Layout>
        <div className="container2">
        <div className="containerQr" >
        <div className="qr-generador" style={containerStyle}>
          <div className="columnaCrear">
            
          <div className="tituloCrear">
            <h1>GENERADOR DE QR</h1>
            <updateUser></updateUser>
          </div>
          <div className="linkCrear">
              {/* <Link to="/pipiver">
                  <StaticImage className="logoheader"
                  src="..\componentes\images\acceso.png"
                  loading="eager"
                  width={80}
                  height={80}
                /></Link> */}
              <Pipiver>
                <StaticImage className="logoheader"
                  src="..\acceso.png"
                  loading="eager"
                  width={80}
                  height={80}
                />
              </Pipiver> 
  
          </div>
          </div>
          
          {/* <UploadUserImage></UploadUserImage>
          <ChangeAvatar></ChangeAvatar> */}
            <PopoverInstr></PopoverInstr>
            
            
            
            <div className="contenidoqr">
            <p className="grupo1">Contenido del QR</p>
                    <br />
                     <div className="tabStyle">
            <CenteredTabs 
              inputValue={inputValue} 
              setInputValue={setInputValue} 
              latLng={latLng} 
              setLatLng={setLatLng} 
              setInputType={setInputType}
            />
            </div> 
            </div>
            
  
          <div className="personalizarqr">
                 <p className="grupo1">Personalizar QR</p>
            <Qrcomponent
              onColorChange={handleColorChange}
              onSizeChange={handleSizeChange}
              colorOptions={colorOptions}
            />
          </div>
          <div className="qr-contenido">
              <p className="grupo1">Tu QR</p>
              <div ref={qrRef}>
              <div ref={qrRef}>
              <QRCode
                value={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue}
                size={qrSize}
                fgColor={qrColor}
              />
              </div>
            </div>
          </div>
    {/* <div className="modales"> */}
            {/* <Modall></Modall> */}
          {/* <SaveDb data={inputValue} nref="manolita" desc="paca" userId="1"></SaveDb> */}
            
          
    <div className="qr-opciones">
      <div className="qr-guardar">
      <h3 className="grupo1" >
        {/* <FaSave></FaSave> */}
        Guardar</h3>       
         <ul>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange}/>
        </ul>
        <ul>
          <label for="descripcion">Descripción:</label>
          <input type="text" id="descripcion" name="descripcion" value={descripcion} onChange={handleDescripcionChange} />
        </ul>  
        <GuardarQr 
          
          data={inputType === 'coordinates' ? `${latLng.lat},${latLng.lng}` : inputValue} 
          nref={nombre} 
          desc={descripcion} 
                
        >
        </GuardarQr>         
        {/* <ul >
            <li >
            <ModalTandem
              boton="Guardar"
              text={<GuardarQr></GuardarQr>}
              
            />
            </li> */}
          {/* <button onClick={handleOpen} className='button22'>Guardar
            
          </button> */}
        {/* </ul>             */}
        
              
      </div>
        
      {/* <br /> */}
      <div className="qrcompartir">
        <div className="grupo1">Listado QR</div>
          <br></br>
        {/* <button onClick={/listQr} className='button22'>Listado Qr
        </button> */}
        <button className="button22"><Link to="/listQr" style={{ textDecoration: `none`,color: `black`}}>Listado Qr</Link></button>
      </div>
      <div className="qrcreado">
        <div className="grupo1">Descargar QR</div>
        <br></br>
      <button onClick={handleOpen} className='button22'>Descargar QR
         {/* <FaDownload style={{ color: '#43381b' }}/> */}
         </button>
      </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <p>Selecciona el formato para descargar el QR</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="grupo1">
                    <label>
                      <input
                        type="radio"
                        value="png"
                        checked={selectedFormat === 'png'}
                        onChange={handleFormatChange}
                      />
                      PNG
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="jpeg"
                        checked={selectedFormat === 'jpeg'}
                        onChange={handleFormatChange}
                      />
                      JPEG
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="svg"
                        checked={selectedFormat === 'svg'}
                        onChange={handleFormatChange}
                      />
                      SVG
                    </label>
                  </div>
                  <button onClick={handleDownload1} className="button22">
                    Descargar QR
                  </button>
                  {descargado && <p className="pdescarga">¡El QR se ha descargado!</p>}
                </Typography>
                <Button onClick={handleClose}>Cerrar</Button>
              </Box>
            </Modal>
  
  
          </div>
        {/* </div> */}
        </div>       
  
        {/* <a href="/" role='button' className='button'>Volver a inicio</a> */}
        
      </div>
      </div>
      </Layout>

        </>
    );
   }
}

export default Crearqr;
