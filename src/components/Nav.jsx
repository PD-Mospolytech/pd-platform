import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Container, MenuItem, Drawer, Divider  } from "@mui/material"
import { NavLink } from "react-router-dom"
import { Menu, Home, Close } from "@mui/icons-material";
import logo from "../assets/logo.svg";

export default function Nav () {
   const [open, setOpen] = useState(false);

   const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
   };

   const scrollToSection = (sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      const offset = 128;
      if (sectionElement) {
         const targetScroll = sectionElement.offsetTop - offset;
         sectionElement.scrollIntoView({ behavior: "smooth" });
         window.scrollTo({
           top: targetScroll,
           behavior: "smooth",
         });
         setOpen(false);
      }
   };

   return (
      <div>
	      <Box sx={{ flexGrow: 1 }}>
		      <AppBar position="fixed" sx={{
		         boxShadow: 0,
		         bgcolor: "transparent",
		         backgroundImage: "none",
		         width: "64px",
		         height: "100%",
		         height: "100dvh",
		         top: "0", left: "0",
		         boxSizing: "border-box"
		      }}>
		         <Toolbar variant="regular" sx={(theme) => ({
		            display: "flex",
		            alignItems: "center",
		            justifyContent: "start",
		            flexShrink: 0,
		            bgcolor: "#000",
		            height: "100%",
		            display: "flex", 
		            flexDirection: "column",
		            py: "24px"
		         })}>
			         <Box sx={{
			            display: "flex",
			            flexDirection: "column",
			            alignItems: "center",
			            px: 0,
			         }}>
				         <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
					         <Home sx={{ fontSize: "36px" }} />
				         </NavLink>
				      </Box>
				      
				      <Box sx={{ display: { xs: "none", md: "none" }, py: '80px' }}>
					      <MenuItem
						      onClick={() => scrollToSection("main")}
						      sx={{ py: "6px", px: "12px" }}
					      >
						      <NavLink to="/" style={{ textDecoration: "none" }}>
							      <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
								      Главная
							      </Typography>
						      </NavLink>
					      </MenuItem>
				         <MenuItem
					         onClick={() => scrollToSection("projects")}
					         sx={{ py: "6px", px: "12px" }}
					      >
						      <NavLink to="/projects" style={{ textDecoration: "none" }}>
							      <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
								      Витрина проектов
							      </Typography>
						      </NavLink>
					      </MenuItem>
					      <MenuItem
						      onClick={() => scrollToSection("durties")}
						      sx={{ py: "6px", px: "12px" }}
					      >
						      <NavLink to="/duties" style={{ textDecoration: "none" }}>
							      <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
								      Чем предстоит заниматься?
							      </Typography>
						      </NavLink>
					      </MenuItem>
				      </Box>
						      
						      
				      <Box sx={{ 
				         /*display: { sm: "", md: "none" } */
				      }}>

					      <Box sx={{
			               flexGrow: 1,
			               display: "flex",
			               flexDirection: "column",
			               alignItems: "center",
			               px: 0,
			            }}>
					         <Button
						         variant="text"
						         color="primary"
						         aria-label="menu"
						         onClick={toggleDrawer(true)}
						         sx={{ minWidth: "30px", p: "4px" }}
					         >
						         <Menu sx={{ color: "white", fontSize: "36px" }} />
					         </Button>
				         </Box>
					      
					      <Drawer 
					         anchor="left" 
					         open={open} 
					         onClose={toggleDrawer(false)}
					      >
						      <Box sx={{
						         minWidth: "100dvw",
							      p: "20px 40px",
							      backgroundColor: "#000",
							      flexGrow: 1,
						      }}>
							      <Box sx={{
							         display: "flex",
							         flexDirection: "column",
							         alignItems: "end",
							         flexGrow: 1,
							      }}>
							      </Box>
							      
							      <Box sx={{
							         position: "absolute",
							         right: "54px", top: "50px"
							      }}>
							         <NavLink to="/" style={{ textDecoration: "none" }}>
									      <img src={logo} alt="Логотип" />
								      </NavLink>
							      </Box>
							      
							      <MenuItem onClick={() => scrollToSection("main")} sx={{
							         mb: "24px"
							      }}>
	                           <Button
		                           variant="text"
		                           color="primary"
		                           aria-label="menu"
		                           onClick={toggleDrawer(false)}
		                           sx={{ minWidth: "30px", p: "4px" }}
	                           >
		                           <Close sx={{ color: "white", fontSize: "36px" }} />
	                           </Button>
							      </MenuItem>
							      
							      <MenuItem onClick={() => scrollToSection("main")}>
								      <NavLink to="/" style={{ textDecoration: "none" }}>
									      <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
										      главная
									      </Typography>
								      </NavLink>
							      </MenuItem>
							      
							      <MenuItem onClick={() => scrollToSection("projects")}>
							         <NavLink to="/projects" style={{ textDecoration: "none" }}>
								         <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
									         витрина проектов
								         </Typography>
							         </NavLink>
							      </MenuItem>
							      
							      <MenuItem onClick={() => scrollToSection("durties")}>
							         <NavLink to="/duties" style={{ textDecoration: "none" }}>
								         <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
									         чем предстоит заниматься?
								         </Typography>
							         </NavLink>
							      </MenuItem>

                                  <MenuItem onClick={() => scrollToSection("raiting")}>
							         <NavLink to="/raiting" style={{ textDecoration: "none" }}>
								         <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
									         cтруктура рейтинга
								         </Typography>
							         </NavLink>
							      </MenuItem>

                                  <MenuItem onClick={() => scrollToSection("send-project")}>
							         <NavLink to="/send-project" style={{ textDecoration: "none" }}>
								         <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
									         подать проект
								         </Typography>
							         </NavLink>
							      </MenuItem>

                                  <MenuItem onClick={() => scrollToSection("transfer")}>
							         <NavLink to="/transfer" style={{ textDecoration: "none" }}>
								         <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
									         перевод из другого вуза
								         </Typography>
							         </NavLink>
							      </MenuItem>

                                  <MenuItem onClick={() => scrollToSection("acceleration")}>
							         <NavLink to="/acceleration" style={{ textDecoration: "none" }}>
								         <Typography variant="body2" className="nav-link-hover" sx={{ color: "#fff", fontSize: "32px" }}>
									         aкселерационная программа
								         </Typography>
							         </NavLink>
							      </MenuItem>
							      
						      </Box>
					      </Drawer>
				      </Box>
		         </Toolbar>
		      </AppBar>
	      </Box>
      </div>
)}
