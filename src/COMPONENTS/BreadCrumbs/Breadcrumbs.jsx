import React, { use, useContext, useEffect, useState } from 'react'
import { sidebarcontext } from '../../HooksCOMPONENTS/UsecontextHook'
import "./Breadcrumbs.css"
import { sideMenu } from '../../assets/dataAssets'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const Breadcrumbs = () => {
    const location=useLocation() //this gives the path or current location of the website,with pathanem,search etc
    const ursearchParam= new URLSearchParams(location.search) // gives you the query string like ?section=mission
    const section=ursearchParam.get("section") // this extract the value of that query, e.g., "mission"
    const [crumb,setCrumbs]=useState([{ label: "Home",to: "/",}]) //this is the state that stores the default value of the breadcrumb which is always Home,it updates as the statechanges


    //The USEEFFECT construct breadcrumbs on URL or section change 
    useEffect(()=>{
        const newcrumb=[{ label: "Home",to: "/",}] //Starts fresh with just the Home breadcrumb.
        // find the main route using side Menu with sideMenu.find()//f
        const mainpath=sideMenu.find((item)=>item.to===location.pathname) //here with sidemenu.find(),we found all item that have a path and compared if its equal to the current location or pathname of the website, using location.pathname
        if(mainpath){ //here it checks if there was an actual path that was comaprable to the location.pathname.
            newcrumb.push({label:mainpath.label,to:mainpath.to}) // using arrayMethod Push(),it adds the new path it found to the back of the array.
        }
         if(section&&mainpath.children){ // this checks if the section exist and also if any of the items we found in line18 also has children ie any other array attachedto it.
            const subpath=mainpath.children.find((item)=>{// just like the above you are trying to find the item that has a path 
                const param= new URL(item.to, window.location.origin).searchParams.get("section") // here the path "(item.to)" we got,is added into the new Url() mothod to creata a fully qualified url domain,using window.location.origin to get a hosting,then we extract the query using serachparam.get,which give "mission","about"
                return param===section //this compares the value of both param and section if they are equal,
             })
             console.log("subpath is:", subpath)
             if(subpath){  //here we push the value returned by subpath variable the newcrumb array to complete the breadcrumb
                newcrumb.push({label:subpath.label,to:subpath.to})
             }
         }
         setCrumbs(newcrumb) // then we update the crumb by setting Newcrumb (the new array) into it using setCrumb() function
    },[location.pathname,section],)
   
       useEffect(()=>{
        console.log(crumb)
       })
  return (
    <div className='Breadcrumbs'>
     {
        crumb.map((item,index)=>( //over here we are maping the the array to render it to the Dom//
            <span>
                <Link to={item.to} className='breaLinks'>{item.label}</Link>
                {index < crumb.length - 1 && <span style={{color:"darkGray",fontWeight:600}}> / </span>}
            </span>
        ))
     }
    </div>
  )
}

export default Breadcrumbs
