import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";

function Main() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <nav className="border  mx-auto text-center mt-4 ">
        <h1 className="border w-50 mx-auto">Main</h1>
      </nav>
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
            <BottomNavigationAction label="About" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </>
  );
}

export default Main;
