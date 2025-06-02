import React, { useContext} from "react";
import "./Subnav.css";
import { sidebarcontext } from "../../HooksCOMPONENTS/UsecontextHook";
import { Link } from "react-router-dom";

const AcademicSubnav = ({ currentindex, setCurrentIndex }) => {
  const { academicsContext } = useContext(sidebarcontext);
  return (
    <>
      <div>
        <ul className="subnav">
          {academicsContext.map((item, index) => (
            <Link to={item.to} className={`link ${currentindex===index?"actives":""}`}>
              <li onClick={() => setCurrentIndex(index)}>{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AcademicSubnav;
