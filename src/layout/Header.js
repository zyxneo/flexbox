import React from "react";
import {Link} from "react-router";
import NavLink from "./NavLink";

export default class Header extends React.Component {

  render() {
    return (
      <header class="site__header">
        <div class="site__container">
          <nav class="header__nav">
            <ul role="nav" class="list-inline">
              <NavLink to="/flexbox/" >Home</NavLink>
              <NavLink to="/flexbox/try-flexbox" >Tryit!</NavLink>
              <NavLink to="/flexbox/about" >About</NavLink>
            </ul>
          </nav>

        </div>
      </header>
    )
  }
}
