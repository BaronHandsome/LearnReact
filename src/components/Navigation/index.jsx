import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";
import { IMAGES } from "../../assets/images";

export const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/MyPage" activeClassName={classes.active}>
            <div className={classes.liBlock}>
              <img src={IMAGES.USER} className={classes.img} />
              Profile
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Dialogs">
            <div className={classes.liBlock}>
              <img src={IMAGES.MESSAGE} className={classes.img} />
              Dialogs
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/News">
            <div className={classes.liBlock}>
              <img src={IMAGES.INFO} className={classes.img} />
              News
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Music">
            <div className={classes.liBlock}>
              <img src={IMAGES.MUSIC} className={classes.img} />
              Music
            </div>
          </NavLink>
        </li>
        <li>
          <div className={classes.liBlock}>
            <a>Settings</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
