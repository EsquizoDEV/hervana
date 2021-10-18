import * as React from 'react';
import { useState } from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Box, Grid, TextField, Typography } from '@mui/material';
import './index.css'
import { SimpleButton } from '../../components/core/SimpleButton';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import history from '../../history';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#2D302E',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
    history.push("/")
    window.location.reload()
  };

  return (
    <React.Fragment>
      <Button sx={{backgroundColor:"#1CF445", color:"black"}}  onClick={handleOpen}>¿Qué sigue?</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography variant="h3" style={{marginBottom:"20px", color:"white"}} id="child-modal-title">Lo que sigue con tu proyecto</Typography>
          <Typography variant="body2" style={{color:"white"}} id="child-modal-description">
           <Typography variant="body3" style={{color:"white"}}>Nos pondremos en contacto contigo para definir una reunión</Typography><br/>
           <Typography variant="body3" style={{color:"white"}}>Esperaremos que tu proyecto sea aprovado después de la reunión</Typography><br/>
           <Typography variant="body3" style={{color:"white"}}>Volveremos a hablar contigo para empezar a trabajar</Typography>
          </Typography>
          <Button sx={{backgroundColor:"#1CF445", color:"black"}}  onClick={handleClose}>Ok</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


const ProjectInput = () => {
  const [status, setStatus] = useState(false)
  const [name,setName] = useState("")
  const [mail,setMail] = useState("")
  const [valid, setValid] = useState(true)
  const [phone,setPhone] = useState("")
  const [msg,setMsg] = useState("")
  const [open, setOpen] = React.useState(false);
  

  const emailValidator = (value) => {
    let emailInput = value; 
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
    if(regex.test(emailInput)) {
      setValid(true)
    } else {
      setValid(false)
    }
    
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
    history.push("/")
    window.location.reload();
  };

  const handleSend = (e) => { 
    e.preventDefault();
      axios.post('http://localhost:8000/hervana-af5fd/us-central1/api/project', {
        project: {
          name:name,
          mail: mail,
          phone:phone,
          description:msg
        }
      }).then(res => {
        console.log(res)
        if(res.status === 201 && res.data.message === "Proyecto registrado exitosamente"){
          setStatus(true)
          handleOpen()
        } else {
          setStatus(false)
          handleOpen()
        }      
      })

  }
  return (
      
    <div className="project_input">
       <NavBar />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            
            <Typography 
            variant="h3" 
            style={{marginBottom:"20px", color:"white"}} 
            id="parent-modal-title">
              {status ? "Felicidades!" : "Lo sentimos, hubo un error al enviar tu proyecto"}
            </Typography>
            
            <Typography 
            variant="body2" 
            style={{color:"white", marginBottom:"20px"}} 
            id="parent-modal-description">
              {status ? 
              "Tu proyecto fue recibido por nuestros ejecutivos, en los próximos días nos pondremos en contacto contigo"
              : 
              "Intenta de nuevo más tarde"}
            </Typography>
            
            {status ? <ChildModal />: <Button sx={{backgroundColor:"#1CF445", color:"black"}} onClick={handleClose}>Intentar de nuevo</Button>}
            
            <Button sx={{backgroundColor:"#1CF445", color:"black", marginLeft:"20px"}} onClick={handleClose}>Cerrar</Button>

          </Box>
        </Modal>
    
      <Grid sx={{marginTop:"50px",display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}} container>
          <Box sx={
            {
              backgroundColor:"#2D302E",
              width:"750px",
              padding:"30px",
            }
          }>
            <Typography 
            gutterBottom 
            component="div" 
            variant="h3" 
            style={
              {
                fontWeight:"bold", 
                color:"white"
              }
            }>Comunicate con nosotros para asesorarte con la información que necesitas</Typography>
            <Box component="form"
            onSubmit={handleSend}
            sx={
              {
                width:"100%",
                display:"flex", 
                flexDirection:"column",
                justifyContent:"space-between",
                backgroundColor:"#2D302E",
                height:"400px",
                alignItems:"center"
              }
            }
            >
              <TextField 
              variant="filled" 
              sx={
                {
                  width:"100%", 
                  backgroundColor:"white", 
                  borderRadius:"0"
                  }
                  } required FormHelperTextProps={<p>Llena este dato</p>} onChange={(e)=> setName(e.target.value)} label="Nombre"/>
              <TextField 
              variant="filled" 
              sx={
                {
                  width:"100%", 
                  backgroundColor:"white", 
                  borderRadius:"0"
                  }
                  } 
                  required 
                  onChange={(e)=> emailValidator(e.target.value)} 
                  helperText={valid ? null : "Introduce un correo electrónico válido"} 
                  label="Correo"/>

              <TextField 
              variant="filled" 
              sx={
                {
                  width:"100%", 
                  backgroundColor:"white", 
                  borderRadius:"0"
                  }
                  } required onChange={(e)=> setPhone(e.target.value)} label="Teléfono"/>

              <TextField 
              multiline 
              variant="filled" 
              sx={
                {
                  width:"100%", 
                  backgroundColor:"white", 
                  borderRadius:"0"
                }
                } required onChange={(e)=> setMsg(e.target.value)} label="Mensaje"/>
                
                <SimpleButton id="submit_button" type="submit" sx={{backgroundColor:"#29ABE2", width:"120px"}} variant="filled">Enviar</SimpleButton>
            </Box>
            
            
          </Box>
      </Grid>
      
      
    </div>
  );
}

export default ProjectInput;