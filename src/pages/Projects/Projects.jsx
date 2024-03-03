import { Box, Typography } from "@mui/material";
import Nav from "../../components/Nav";
import logo from '../../assets/logo.svg';
import Filter from "./components/Filter";
import ProjectsList from "./components/ProjectsList";
import React from "react";

export default function Projects () {
   const [categoryId, seCategoryId] = React.useState(0);
   const [roleId, seRoleId] = React.useState(0);

   const [isFilter, setIsFilter] = React.useState(false);

   const toggleFilter = () => {setIsFilter(!isFilter);}

   const changeCategoryId = (catId) => {
      seCategoryId(catId);
   }

   const changeRoleId = (rolId) => {
      seRoleId(rolId);
   }

   return (
   <Box sx={{ bgcolor: 'background.default', mt: 5}}>
      <Nav />
      <div className="projects_header">
         <img style={{marginBottom: '30px'}} src={logo} alt="Логотип" />
         <Typography mb="30px" variant="h5" color="white" fontWeight="400">ПРОЕКТНАЯ ДЕЯТЕЛЬНОСТЬ</Typography>
         <Typography mb="30px" variant="h3" color="white" fontWeight="700">Витрина проектов!</Typography>

         <Filter 
            isFilter={isFilter}
            toggleFilter={toggleFilter}
            changeCategoryId={changeCategoryId}
            changeRoleId={changeRoleId}
         />

      </div>

      <ProjectsList 
         categoryId={categoryId}
         roleId={roleId}
      />
      
    </Box>
   )
}
