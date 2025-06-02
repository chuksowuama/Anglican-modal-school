import React, { useEffect } from 'react'

const Useoutsideremoveclick = (ref,callbackfunc) => {
   
    useEffect(()=>{
        function handleremoveelement(event){
            if(ref.current&&!ref.current.contains(event.target)){
                callbackfunc()
            }
        }
        document.addEventListener("mousedown",handleremoveelement)
        return()=>{
            document.removeEventListener("mousedown",handleremoveelement)
        }
     
    },[ref,callbackfunc])
}

export default Useoutsideremoveclick
