require("./header.scss");

import React from "react";
import {Link} from "react-router";
import NavLink from "./NavLink";

export default class Header extends React.Component {

  render() {
    return (
      <header class="site__header">
        <div class="site__container">
          <nav class="header__nav">
            <ul role="nav" class="header__nav-list">
              <NavLink to="/flexbox/" >
                <i class="nav__icon icon">⚓</i>
                <span class="link__item">Home<span class="nav__desc">with the resources</span></span>
              </NavLink>
              <NavLink to="/flexbox/properties" >
                <i class="nav__icon icon">☷</i>
                <span class="link__item">Properties<span class="nav__desc">to learn them all</span></span>
              </NavLink>
              <NavLink to="/flexbox/try-flexbox" >
                <i class="nav__icon icon">⚾</i>
                <span class="link__item">Tryit!<span class="nav__desc">for the fun</span></span>
              </NavLink>
              <NavLink to="/flexbox/about" >
                <i class="nav__icon icon">☸</i>
                <span class="link__item">About<span class="nav__desc">to stay in contact</span></span>
              </NavLink>
            </ul>
          </nav>

        </div>
      </header>
    )
  }
}
