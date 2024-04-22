import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import Nav from "../components/Nav";
import awardImg from "../assets/award.svg"
import noteImg from "../assets/note.svg"
import groupImg from "../assets/group.svg"
import logo from "../assets/logo.svg";
import logoMospolytech from "../assets/polytech_logo.png"
import logoDeloSber from "../assets/sberdelo_logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Acceleration () {

   const programs = [
   {
     name: "Развитие научных компетенций",
     bg: "#000000" 
   },
   {
     name: "Научный туризм в Москве и Московской Области",
     bg: "#E63246" 
   },
   {
     name: "Карьера молодого учёного: осознанный выбор",
     bg: "#4B6EB9" 
   },
   {
     name: "ТепGlove",
     bg: "#874BA0" 
   }]

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

    const MainButton2 = styled(Button)(({ theme }) => ({
      color: "#fff",
      backgroundColor: "#4B6EB9",
      fontWeight: "bold",
      boxShadow: 'none',
      borderRadius: '24px',
      '&:hover': {
        backgroundColor: "#4B6EB9",
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
                  Акселерационная программа
               </Typography>
               <Typography variant="body1" color="white" width="50%" mb="64px">
                  Программа направлена на поддержку команд, предлагающих проекты и инициативы по формированию инновационных продуктов. Программа реализуется совместно Московским Политехом и АО «Деловая среда» (дочерняя компания Сбера, основана в 2012 году).                                    
               </Typography>  
               
               <Box sx={{bgcolor: "background.default", px: 10, py: 6, mx: 5}}>
                  <Typography variant="h5" fontWeight="700" mb="16px" style={{textAlign: "center"}}>
                     Организаторы акселерационной программы
                  </Typography>
                  <Box sx={{display: "flex", gap: "32px", justifyContent: "center", my: "24px"}}>
                    <img src={logoMospolytech} alt="Логотип МосПолитеха" />
                    <img src={logoDeloSber} alt="Логотип Деловой среды (Sber)" />
                  </Box>
                  <div className="steps">
                      <div className="step">
                          <strong>1 этап. Оценка предлагаемых идей</strong>
                          <em>июнь - август</em>
                          <div className="step-content"> 
                              <span>Команда проекта получает обратную связь и определяем задачи «на лето».</span>  
                          </div>
                      </div>
                      <div className="step">
                          <strong>2 этап. Образовательный блок</strong>
                          <em>cентябрь - октябрь</em>
                          <div className="step-content">  
                              <span>
                                 Команду проекта познакомят с подходами к созданию продуктов (Lean Startup, Agile и Customer Development и др.)
                              </span>  
                          </div>
                      </div>
                      <div className="step">
                          <strong>3 этап. Акселерация проектов</strong>
                          <em>ноябрь - декабрь</em>
                          <div className="step-content">  
                              <span>Консультации со специалистами, формирование паспорта проекта как плана дальнейшего развития проекта.</span>  
                          </div>
                      </div>
                      <div className="step">
                          <strong>Финал. Демо-день — очная защита</strong>
                          <em>декабрь</em>
                          <div className="step-content"> 
                              <span>Презентация проектов перед членами жюри и представителями компаний.</span>  
                          </div>
                      </div>  
                    <MainButton variant="contained">Подробнее</MainButton>        
                  </div>
               </Box>
               
            </Box> 
            
        <Box sx={{ bgcolor: "#E4E4E4", mx: 0, p: 7, pt: "80px", pb: 0}}>
            <Typography variant="h3" color="black" fontWeight="700">
               Проекты участвующие в программе 
            </Typography>
            <Grid container sx={{ width: "70%", mx: "auto", mt: "24px" }}>
                  {programs.map((e, index) => { 
                     return (
                        <Grid item index key={index} xs={6} sx={{ height: "320px", py: 2, px: 3, bgcolor: e.bg, }}>
                          <Typography variant="body1" align="right" sx={{ fontSize: "40px", textTransform: "lowercase" }} color="white">
                             {e.name}
                          </Typography>
                        </Grid>
                     )}
                  )}
            </Grid>

        <Box sx={{bgcolor: "background.default", px: 10, py: 6, mx: 5, mt: "68px"}}>
            <Typography variant="h5" color="black" fontWeight="700">
               Регистрируйтесь на программу 
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px" }}>
                После сбора и обработки заявок проектов в сентябре 2023 года начнется активная фаза – основные мероприятия акселератора.
            </Typography>  
            <Box sx={{ display: "flex", justifyContent: "center", gap: "24px", py: "20px"}}>
                <MainButton variant="contained" color="success" fullWidth={false} size="large">Регистрация</MainButton>
                <MainButton2 variant="contained" color="primary" fullWidth={false} size="large">Вступайте в группу в Telegram</MainButton2>   
            </Box>
            <Typography variant="body1" sx={{ fontSize: "16px" }}>
                По всем вопросам можно обращаться в Центр проектной деятельности: 
            </Typography>  
            <Box sx={{ display: "flex", p: "12px 0 4px"}}>
                <LocationOnIcon sx={{ fontSize: "44px" }}/>
                <Box>
                   <Typography variant="body1" color="black" fontWeight="700">
                       локация
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                        корпус на Большой семеновской, ауд. А102
                    </Typography> 
                </Box>
            </Box> 
            <Box sx={{ display: "flex", p: "12px 0 4px"}}>
                <LocalPhoneIcon sx={{ fontSize: "44px" }}/>
                <Box>
                   <Typography variant="body1" color="black" fontWeight="700">
                       контакты
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                        тел.: 1539,1531,1532 <br /> эл. почта: cpd@mospolytech.ru
                    </Typography> 
                </Box>
            </Box> 
        </Box>
         
         </Box>

         </Box>
      </Box>      
   )
}
