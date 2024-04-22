import { Box, Typography, Grid } from "@mui/material";
import Nav from "../components/Nav";
import awardImg from "../assets/award.svg"
import noteImg from "../assets/note.svg"
import groupImg from "../assets/group.svg"
import logo from "../assets/logo.svg";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function Raiting () {

   return (
      <Box sx={{
         display: "flex",
         flexWrap: "nowrap",
         pl: "64px"
      }}>
         <Nav/>
               
         <Box>
            
            <Box className="raiting-main" sx={{ 
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
                  Структура рейтинга
               </Typography>
               <Typography variant="body1" color="white" width="50%" mb="64px">
                  описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание                                                        
               </Typography>  
               
               <Box sx={{bgcolor: "background.default", px: 10, py: 6, mx: 5}}>
                  <div className="raitings">
                      <div className="raitings-item">
                          <div className="step-content" style={{ display: "grid", gridTemplateColumns: "240px auto"}}>
                              <span style={{ textAlign: "center" }}> {[1, 2].map(el => (
                                    <StarIcon key={{el}} sx={{ fontSize: 100, color: "#55B432"}} />
                                ))} </span>  
                              <span>описание описание описание описание описание описание описание описание описание описание  </span>  
                          </div>
                      </div>
                      <div className="raitings-item">   
                          <div className="step-content" style={{ display: "grid", gridTemplateColumns: "240px auto"}}>
                              <span style={{ textAlign: "center" }}> {[1].map(el => (
                                    <StarIcon key={{el}} sx={{ fontSize: 100, color: "#4B6EB9"}} />
                                ))} </span>     
                              <span>    
                                 описание описание описание описание описание описание описание описание описание описание  
                              </span>  
                          </div>
                      </div>
                      <div className="raitings-item"> 
                          <div className="step-content" style={{ display: "grid", gridTemplateColumns: "240px auto"}}>
                              <span style={{ textAlign: "center" }}> {[1].map(el => (
                                    <StarOutlineIcon key={{el}} sx={{ fontSize: 100 }} />
                                ))} </span>    
                              <span>описание описание описание описание описание описание описание описание описание описание  </span>  
                          </div>
                      </div>
                      
                      <div>
                        <strong>Внимание!</strong>
                        <ul>
                            <li>Каждый проект выбирается на весь учебный год и его нельзя поменять.</li>
                            <li>На некоторые проекты можно записаться студентам только определенной специальности.</li>
                        </ul>
                      </div>        
                  </div>
               </Box>
               
            </Box> 
         
         </Box>
      </Box>      
   )
}
