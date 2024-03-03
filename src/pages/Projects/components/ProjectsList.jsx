import React from 'react'
import projectsData from "../../../database/projects.json";
import ProjectItem from './ProjectItem';

export default function ProjectsList({}) {

  return (
    <div className='projects_list'>
        {
            projectsData.length > 0 ? (
                projectsData.map((project, index) => (
                    <ProjectItem projectItem={project} key={index} />
                ))
            ) : (
                <Typography mb="30px" variant="h5" fontWeight="400">Список проектов пуст</Typography>
            )
        }
    </div>
  )
}
