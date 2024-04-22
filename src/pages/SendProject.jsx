import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import Nav from "../components/Nav";
import awardImg from "../assets/award.svg"
import noteImg from "../assets/note.svg"
import groupImg from "../assets/group.svg"
import logo from "../assets/logo.svg";
import { styled } from '@mui/material/styles';

export default function SendProject () {
    const MainButton = styled(Button)(({ theme }) => ({
      color: "#fff",
      backgroundColor: "#21BA72",
      fontWeight: "bold",
      boxShadow: 'none',
      borderRadius: '24px',
      '&:hover': {
        backgroundColor: "#1CA866",
      },
    }));

   return (
      <Box sx={{
         display: "flex",
         flexWrap: "nowrap",
         pl: "64px"
      }}>
         <Nav/>
               
         <Box>
            
            <Box className="send-project-main" sx={{ 
               bgcolor: "background.default",
               p: "42px 50px 100px"               
            }}>
               <img src={logo} alt="Логотип" />
               <Typography variant="h5" sx={{
                  fontWeight: "400",
                  color: "white",
                  my: "30px",
               }}>
                  ПРОЕКТНАЯ ДЕЯТЕЛЬНОСТЬ
               </Typography> 
                        
               <Typography variant="h3" color="white" fontWeight="700" mb="16px">
                  Подать проект
               </Typography>
               <Typography variant="body1" color="white" width="50%" mb="64px">
                  Каждый студент может предложить свой оригинальный проект, которым будет заниматься в течении семестра и больше до реализации продуктового результата.                                                        
               </Typography>  
               
               <Box sx={{bgcolor: "background.default", px: 10, py: 6, mx: 5}}>
                  <div className="steps">
                      <div className="step" style={{height: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>  
                        <TextField
                          label="Описание"
                          multiline
                          rows={5}
                          defaultValue="Название, тема, итоговый продукт проекта и т.д."
                        />
                        <MainButton variant="contained" color="success" fullWidth={false} size="large">Подать проект</MainButton>
                      </div>           
                  </div>
               </Box>
               
            </Box> 
         
         </Box>
      </Box>      
   )
}
