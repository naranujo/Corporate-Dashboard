import React from "react";

function Navmenu(props) {
  return (
    <li className="nav-item">
      {props.MenuName.map(function (data) {
        return (
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>{data}</span>
          </a>
        )
      })}
    </li>
  );
}

export default Navmenu;
