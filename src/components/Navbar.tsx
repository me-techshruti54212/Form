// import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" style={{ padding: 10 }}>
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" style={{ marginRight: 20 }}>
          <NavLink to="/" style={{ color: "white" }}>
            Form
          </NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink to="/home" style={{ color: "white" }}>
            Home
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
