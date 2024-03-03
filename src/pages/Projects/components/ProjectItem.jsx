import React from 'react'
import projectImage from "../../../assets/project_image.png";

export default function ProjectItem({projectItem, key}) {
  return (
    <div className="project_item" key={key}>
        <img src={projectImage} />
        <span>{projectItem.projectName}</span>
    </div>
  )
}
