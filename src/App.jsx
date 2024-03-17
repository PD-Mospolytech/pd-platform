import { Box, Typography } from "@mui/material"
import "./App.css"
import Nav from "./components/Nav"
import bgImg from "./assets/main_bg.jpg"
import logo from "./assets/logo.svg";

function App() {
   return (
      <Box sx={{
         display: "flex",
         flexWrap: "nowrap",
         pl: "64px"
      }}>
         <Nav/>
         
         <Box sx={{
            minHeight: "100vh",
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
            <Typography variant="h3" sx={{
               fontWeight: "700",
               color: "white",
               width: "15em",
               mb: "16px",
            }}>
               Обучение через работу над реальными проектами
            </Typography>
            <Typography variant="body1" sx={{
               color: "white", 
               width: "80%" 
            }}>
               Проектная деятельность - описание описание описание описание описание описание описание
               описание описание описание описание описание описание описание описание описание описание
               описание описание описание описание описание описание описание описание описание описание
               описание описание описание описание описание описание описание описание описание описание
               описание описание описание описание описание описание описание описание описание описание
               описание описание описание описание описание 
            </Typography>
         </Box>
      </Box>
)}

export default App
