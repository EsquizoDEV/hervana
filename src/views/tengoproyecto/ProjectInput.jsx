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
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useLanguage from '../../hooks/useLanguage';

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
  const [state, setState] = useState({})
  const [status, setStatus] = useState(false)
  const [disable, setDisable] = useState(false)
  const [open, setOpen] = useState(false);
  

  const hosts = [
      "http://localhost:8000/hervana-af5fd/us-central1/api/project",
      "https://us-central1-hervana-af5fd.cloudfunctions.net/api/project"
  ]

  const handleChange = ((e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  })
  
  const emailValidator = (value) => {
    let emailInput = value; 
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    
    if (regex.test(emailInput)){
      return true
    } else {
      return false
    }
    
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if(status){
      setOpen(false)
      history.push("/")
      window.location.reload();
      return
    }
    setOpen(false) 
  };

  const handleSend = (e) => { 
    e.preventDefault();
    if(emailValidator(state.email)){
      setDisable(true)
      axios.post(hosts[1], {
      project: {
        name:state.name,
        mail: state.email,
        phone:state.phone,
        description:state.msg
      }
      }).then(res => {
        if(res.status === 201 && res.data.message === "Proyecto registrado exitosamente"){
          setStatus(true)
          handleOpen()
        } else {
          setStatus(false)
          setDisable(false)
          handleOpen()
        }      
      })
    } else { 
        setStatus(false)
        handleOpen()
    }
     

  }

    let theme = useTheme();
    
    let {getText} = useLanguage()
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
      
    <div>
      <NavBar id="nav" theme={theme} isMobile={isMobile} />
      <div style={{width:"100%", height:"100vh", marginTop:"10vh"}} className="project_input">
        
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
     
        
        <Grid sx={{display:"flex",justifyContent:"center", alignItems:"center", height:isMobile ? "80%" : "70%"}} container>
                  <Box component="form"
                      onSubmit={handleSend}
                      sx={
                      {
                          height:"80%",
                          display:"flex", 
                          flexDirection:"column",
                          justifyContent:"space-between",
                          alignItems:"center",
                          backgroundColor:"#2D302E",
                          alignItems:"center",
                          width:isMobile ? "100%" : "50%"
                      }
                      }
                  >
                    <Typography 
                      gutterBottom 
                      component="div" 
                      variant="h1" 
                      style={
                        {
                          textAlign:"center",
                          fontSize:"3vh",
                          width:isMobile ? "80%" : "100%",
                          fontWeight:"bold", 
                          color:"white",
                          marginTop:isMobile ? "2vh" :  "5vh",
                        }
                    }> {getText('proyecto', 'input', 'title')} </Typography>
                    <TextField 
                    variant="filled" 
                    sx={
                      {
                        width:isMobile ? "80%" : "40%", 
                        backgroundColor:"white", 
                        borderRadius:"0"
                        }
                        } required name="name" FormHelperTextProps={<p>Llena este dato</p>} onChange={handleChange} label={getText('proyecto', 'input', 'name')}/>
                    <TextField 
                    variant="filled" 
                    sx={
                      {
                        width:isMobile ? "80%" : "40%", 
                        backgroundColor:"white", 
                        borderRadius:"0"
                        }
                        } 
                        required 
                        name="email"
                        onChange={handleChange} 
                        helperText={emailValidator(state.email)? null : getText('proyecto', 'input', 'email_validator')} 
                        label={getText('proyecto', 'input', 'email')}/>

                    <TextField 
                    variant="filled" 
                    sx={
                      {
                        width:isMobile ? "80%" : "40%", 
                        backgroundColor:"white", 
                        borderRadius:"0"
                        }
                        } required type="number" name="phone" onChange={handleChange} label={getText('proyecto', 'input', 'phone')}/>

                    <TextField 
                    multiline 
                    variant="filled" 
                    sx={
                      {
                        width:isMobile ? "80%" : "40%", 
                        backgroundColor:"white", 
                        borderRadius:"0"
                      }
                      } required name="msg" onChange={handleChange} label={getText('proyecto', 'input', 'message')}/>
                      
                      <SimpleButton disabled={disable} id="submit_button" type="submit" sx={{backgroundColor:"#1CF445", width:"120px", marginBottom:"2vh", color:"black"}} variant="filled">{getText('proyecto', 'input', 'but')}</SimpleButton>
                  </Box>
                  
        </Grid> 
        <Grid item xs={12}> 
              <Footer isMobile={isMobile} id="footer-component" />
        </Grid>
        
      </div>
    </div>
  );
}

export default ProjectInput;