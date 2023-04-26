import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import AddIcon from "@mui/icons-material/Add";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

///

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Navbar>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="Login">Home</Nav.Link>
          <Nav.Link href="Create Accout">Features</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container-md border ">
        <Box
          sx={{
            width: 500,
            border: "1px solid rgba(255, 255, 255, 0.7)",
            margin: "0px auto 0px auto",
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              console.log(newValue);
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<GraphicEqIcon />} />
            <BottomNavigationAction label="Buckets" icon={<LocalDrinkIcon />} />
            <BottomNavigationAction label="Add song" icon={<AddIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
}

export default NavbarComponent;
