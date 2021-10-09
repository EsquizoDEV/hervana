import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import NestedModal from './components/Modal'
import { Box, Grid, TextField, Typography } from '@mui/material';
import './index.css'
import { SimpleButton } from '../../components/core/SimpleButton';
import axios from 'axios';


const ProjectInput = () => {
  const [status, setStatus] = useState(false)
  const [name,setName] = useState("")
  const [mail,setMail] = useState("")
  const [phone,setPhone] = useState("")
  const [msg,setMsg] = useState("")

  
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
      if(res.status === 201 && res.message === "Proyecto registrado exitosamente"){
        setStatus(true)
      } else {
        //no es necesario este set status, en realidad voya manejar para mostrar un modal de error
        setStatus(false)
      }      
    })
  }
  return (
      
    <div className="project_input">
       <NavBar />

{/* no sirve con el prop status */}
      <NestedModal open={status} />

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
                  } required onChange={(e)=> setName(e.target.value)} label="Nombre"/>

              <TextField 
              variant="filled" 
              sx={
                {
                  width:"100%", 
                  backgroundColor:"white", 
                  borderRadius:"0"
                  }
                  } required onChange={(e)=> setMail(e.target.value)} helperText="Introduce un correo electrónico válido" label="Correo"/>

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
                
                <SimpleButton  id="submit_button" type="submit" sx={{backgroundColor:"#29ABE2", width:"120px"}} variant="filled">Enviar</SimpleButton>
            </Box>
            
            
          </Box>
      </Grid>
      
      
    </div>
  );
}

export default ProjectInput;