import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const Navbar = (props) => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClose = () => {
    sessionStorage.removeItem("user");
    props.setUserState();
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div clasName={classes.root}>
      <AppBar position="static" className={classes.menubackground}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Login and Signup with Firebase Auth
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                // onClose={handleClose}
                onClick={handleCloseMenu}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <h1> Thank You for Signing In</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menubackground: {
    background: "linear-gradient(45deg,#FE688B 30% , #FF8E53 90%)",
  },
  title: {
    flexGrow: 1,
  },
}));
export default Navbar;
