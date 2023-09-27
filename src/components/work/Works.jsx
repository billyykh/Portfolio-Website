import React, { useEffect, useState } from 'react'
import { projectData,projectNav } from "./WorksData";
import Workitems from './Workitems';



export default function Works() {
  const [item,setItem] = useState({name:'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() =>{
    if(item.name === 'all'){
      setProjects(projectData);
    }else{
      const newProjects = projectData.filter((project) => {
        return project.category === item.name;
      });
    }
  })

  return (
    <div>
      {/* <div className="work_filters">

        {projectNav.map((item, index) => {
          return(
            <span className="work_item" key={index}>{item.name}</span>
          )
        })}
      </div> */}

      <div className="work_container container grid">

        {projectData.map((item)=>{
          return <Workitems item={item} key={item.id}/>
        })}
      </div>

    </div>

  )
}
