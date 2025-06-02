import React, { createContext, useEffect, useState } from 'react'
import { sideMenu } from '../assets/dataAssets'

export const sidebarcontext=createContext(null)
const UsecontextHook = (props) => {
    const[Allchildren,setAllchildren]=useState([])
    const[Breadcrumbs,setbreadcrumb]=useState([])
    const[aboutcontext,setAboutContext]=useState([])
    const[academicsContext,setAcademicsContext]=useState([])
    const[Eventcontext,setEventContext]=useState([])

  useEffect(()=>{
     const sideMenuWithChildren=sideMenu.filter((sideitem)=>(sideitem.children))
     const breadcrumb=sideMenu.filter((BreadItems)=>(BreadItems.label))
     setbreadcrumb(breadcrumb)
     const AboutpageNav=sideMenuWithChildren[0]
     setAboutContext(AboutpageNav.children)
     const AcademicpageNav=sideMenuWithChildren[1]
     setAcademicsContext(AcademicpageNav.children)
     const EventpageNav=sideMenuWithChildren[2]
     setEventContext(EventpageNav.children)
  },[])


    const sideContextValue={aboutcontext,academicsContext,Eventcontext,Breadcrumbs}
  return (
    <sidebarcontext.Provider value={sideContextValue}>
        {props.children}
    </sidebarcontext.Provider>
  )
}

export default UsecontextHook
