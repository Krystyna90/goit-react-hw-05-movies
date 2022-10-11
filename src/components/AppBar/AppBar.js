import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

const navItems = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "movies",
    text: "Movies",
  },
];

export const AppBar = () => {
  return (
    <div className={css.Navigation}>
      <div className={css.Header}>
        {navItems.map(({ href, text }) => (
          <NavLink className={css.NavigationLink} to={href} key={href}>
            {text}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};
