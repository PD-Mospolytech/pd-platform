import { Box, Typography, Grid } from "@mui/material";
import Nav from "../components/Nav";
import awardImg from "../assets/award.svg"
import noteImg from "../assets/note.svg"
import groupImg from "../assets/group.svg"
import logo from "../assets/logo.svg";

export default function Duties () {

   const categories = [
   {
     name: "IT",
     bg: "#4B6EB9" 
   },
   {
     name: "дизайн и мультимедия",
     bg: "#874BA0" 
   },
   {
     name: "научные",
     bg: "#4B6EB9" 
   },
   {
     name: "соцтех",
     bg: "#874BA0" 
   },
   {
     name: "стратегические",
     bg: "#E63246" 
   },
   {
     name: "технология",
     bg: "#000000" 
   },
   {
     name: "транспорт",
     bg: "#E63246" 
   },
   {
     name: "урбанистика",
     bg: "#874BA0" 
   },
   {
     name: "химбиотех",
     bg: "#55B432" 
   }] 

   return (
      <Box sx={{
         display: "flex",
         flexWrap: "nowrap",
         pl: "64px"
      }}>
         <Nav/>
               
         <Box>
            
            <Box className="duties-main" sx={{ 
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
                  Чем предстоит заниматься?
               </Typography>
               <Typography variant="h5" color="white" width="50%" mb="64px">
                  Проектная деятельность - нацелена на командную работу, которую курирует куратор и помогает
                  решать задачи и направляет команду на всем пути реализации
                  проекта.                                                       
               </Typography>  
               
               <Box sx={{bgcolor: "background.default", px: 10, py: 6, mx: 5}}>
                  <div className="steps">
                      <div className="step">
                          <strong>1 шаг</strong>
                          <div className="step-content">
                              <img src={noteImg} alt="note"/>   
                              <span>выбор интересующего проекта и подача заявки</span>  
                          </div>
                      </div>
                      <div className="step">
                          <strong>2 шаг</strong>
                          <div className="step-content">
                              <img src={groupImg} alt="group"/>   
                              <span>
                                 командная работа над проектом, представление промежуточных результатов на
                                 промежуточных аттестациях
                              </span>  
                          </div>
                      </div>
                      <div className="step">
                          <strong>3 шаг</strong>
                          <div className="step-content">
                              <img src={awardImg} alt="award"/>   
                              <span>итоговая аттестация, презентация итогового результата</span>  
                          </div>
                      </div>            
                  </div>
               </Box>
               
            </Box> 
            
        <Box sx={{ bgcolor: "#E4E4E4", mx: 0, p: 7, pt: "80px"}}>
            <Typography variant="h3" color="black" fontWeight="700">
               Какие бывают проекты
            </Typography>
            <Typography variant="h5" color="black" sx={{width: "60%", mt: 1, mb: 3}}>
               Тематики бывают разные, но каждый студент найдет себе тематику по вкусу.                                                       
            </Typography>  
            <Grid container sx={{ width: "70%", mx: "auto" }}>
                  {categories.map(e => { 
                     return (
                        <Grid item index xs={4} sx={{ height: "226px", py: 2, px: 3, bgcolor: e.bg, }}>
                          <Typography variant="body1" align="right" sx={{ fontSize: "40px" }} color="white">
                             {e.name}
                          </Typography>
                        </Grid>
                     )}
                  )}
            </Grid>
         </Box>
         
         </Box>
      </Box>      
   )
}
