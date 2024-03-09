import { Box, Typography, Grid } from "@mui/material";
import Nav from "../components/Nav";
import awardImg from "../assets/award.svg"
import noteImg from "../assets/note.svg"
import groupImg from "../assets/group.svg"

export default function Duties () {

   return (
      <Box  className="duties" sx={{ bgcolor: 'background.default', mt: 5, mx: 0, p: 7}} fullwidth>
         <Nav/>
               
         <div className="duties-container">
            <Typography variant="h3" color="white" fontWeight="700">
               Чем предстоит заниматься?
            </Typography>
            <Typography variant="h5" color="white" sx={{width: '50%', mt: 1, mb: 3}}>
               Проектная деятельность - нацелена на командную работу, которую курирует куратор и помогает решать задачи и направляет 
               команду на всем пути реализации проекта.                                                       
            </Typography>  
            <Box sx={{bgcolor: 'background.default', px: 10, py: 6, mx: 5}}>
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
                        <span>командная работа над проектом, представление промежуточных результатов на промежуточных аттестациях</span>  
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
            <Typography variant="h3" color="white" fontWeight="700">
               Какие бывают проекты
            </Typography>
            <Typography variant="h5" color="white" sx={{width: '50%', mt: 1, mb: 3}}>
               тематики бывают разные, но каждый студент найдет себе тематику по вкусу                                                       
            </Typography>  
            <Grid container>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="bod1" color="white">IT</Typography>
                  </Grid>
            </Grid>
         </div>
      </Box>      
   )
}
