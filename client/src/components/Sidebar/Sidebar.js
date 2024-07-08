
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo.svg";

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          CaseMitra
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {/* {props.routes.map((prop, key) => {
            return ( */}
              <li
                className={
                  activeRoute("/dashboard") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/dashboard"} className="nav-NavLink">
                  <i className={"nc-icon nc-bank"} />
                  <p>{"Dashboard"}</p>
                </NavLink>
              </li>
              <li
                className={
                  activeRoute("/cases") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/cases"} className="nav-NavLink">
                  <i className={"nc-icon nc-diamond"} />
                  <p>{"Cases"}</p>
                </NavLink>
              </li>
              <li
                className={
                  activeRoute("/litigants") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/litigants"} className="nav-NavLink">
                  <i className={"nc-icon nc-single-02"} />
                  <p>{"Litigants"}</p>
                </NavLink>
              </li>
              <li
                className={
                  activeRoute("/clientAssociate") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/clientAssociate"} className="nav-NavLink">
                  <i className={"nc-icon nc-single-02"} />
                  <p>{"Client Associates"}</p>
                </NavLink>
              </li>
              <li
                className={
                  activeRoute("/others") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/others"} className="nav-NavLink">
                  <i className={"nc-icon nc-single-02"} />
                  <p>{"Others"}</p>
                </NavLink>
              </li>
              <li
                className={
                  activeRoute("/team") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/team"} className="nav-NavLink">
                  <i className={"nc-icon nc-bell-55"} />
                  <p>{"Team"}</p>
                </NavLink>
              </li>
              <li
                className={
                  activeRoute("/settings") + (props.pro ? " active-pro" : "")
                }
             
              >
                <NavLink to={ "/settings"} className="nav-NavLink">
                  <i className={"nc-icon nc-single-02"} />
                  <p>{"Settings"}</p>
                </NavLink>
              </li>
            {/* );
          })} */}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
