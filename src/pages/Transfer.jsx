import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import Nav from "../components/Nav";
import awardImg from "../assets/award.svg"
import noteImg from "../assets/note.svg"
import groupImg from "../assets/group.svg"
import logo from "../assets/logo.svg";

export default function Transfer () {


   return (
      <Box sx={{
         display: "flex",
         flexWrap: "nowrap",
         pl: "64px"
      }}>
         <Nav/>
               
         <Box>
            
            <Box className="transfer-main" sx={{ 
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
                  Перевод из другого вуза
               </Typography>
               <Typography variant="body1" color="white" width="50%" mb="64px">
                  описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание                                                        
               </Typography>  
               
               <Box sx={{bgcolor: "background.default", px: 10, py: 6, mx: 5}}>
                  <div className="steps">
                      <div className="step" style={{height: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>  
                        <Typography variant="body" mb="64px">
                          описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание                                                        
                        </Typography>
                      </div>           
                  </div>
               </Box>
               
            </Box> 
         
         </Box>
      </Box>      
   )
}
