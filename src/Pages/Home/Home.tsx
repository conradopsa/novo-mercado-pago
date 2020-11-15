import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import MenuIcon from '@material-ui/icons';

import React from "react";

import "./Home.scss";

function Home() {
  return (
    <section>
      <header className="home-header-menu">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="menu"
            >
              
            </IconButton>
            <Typography variant="h6" className="">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </header>
    </section>
  );
}

export default Home;
