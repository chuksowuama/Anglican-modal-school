import React, { useContext, useEffect, useRef, useState } from "react";
import "./Subnav.css";
import { sidebarcontext } from "../../HooksCOMPONENTS/UsecontextHook";
import { Link } from "react-router-dom";

const AboutSubnav = ({ currentindex, setCurrentIndex }) => {
    const { aboutcontext } = useContext(sidebarcontext);
  return (
    <div>
    <ul className="subnav">
      {aboutcontext.map((item, index) => (
       <Link
        to={item.to}
         className={`link ${currentindex === index ? "actives" : ""}`}
        >
        <li onClick={() => setCurrentIndex(index)}>{item.label}</li>
        </Link>
            ))}
          </ul>
        </div>
  )
}

export default AboutSubnav





// import React, { useContext, useEffect, useRef, useState } from "react";
// import "./Subnav.css";
// import { sidebarcontext } from "../../UsecontextHook";
// import { Link } from "react-router-dom";

// const AboutSubnav = ({ currentindex, setCurrentIndex }) => {
//   const { aboutcontext } = useContext(sidebarcontext);

//   return (
//     <div>
//       <ul className="subnav">
//         {aboutcontext.map((item, index) => (
//           <Link
//             to={item.to}
//             className={`link ${currentindex === index ? "actives" : ""}`}
//           >
//             <li onClick={() => setCurrentIndex(index)}>{item.label}</li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default A
