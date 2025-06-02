import React, { useContext } from 'react'
import "./Subnav.css";
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { sidebarcontext } from '../../HooksCOMPONENTS/UsecontextHook';

const EventSubnav = ({currentindex, setCurrentIndex}) => {
    const{Eventcontext}=useContext(sidebarcontext)
      useEffect(()=>{
        console.log("current index:",currentindex)
      })
    

  return (
    <div>
     <ul className="subnav">
        {
        Eventcontext.map((item,index)=>(
          <Link to={item.to} onClick={()=>setCurrentIndex(index)}className={`link ${currentindex===index?"actives":""}`} ><li>{item.label}</li></Link>
        ))
        }
     </ul>
    </div>
  )
}

export default EventSubnav
