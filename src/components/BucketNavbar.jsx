import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import AddIcon from "@mui/icons-material/Add";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function BucketNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="container-md border ">
      <Box
        sx={{
          width: "100%",
          border: "1px solid rgba(255, 255, 255, 0.7)",
          margin: "0px auto 0px auto",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<GraphicEqIcon />} />
          <BottomNavigationAction label="Buckets" icon={<LocalDrinkIcon />} />
          <BottomNavigationAction label="Add song" icon={<AddIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default BucketNavbar;
