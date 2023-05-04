import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";

function BucketActions() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "70%",
          margin: "0px auto 0px auto",
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="General Bucket"
            icon={<LibraryMusicIcon />}
          />
          <BottomNavigationAction
            label="Add to bucket"
            icon={<PlaylistAddIcon />}
          />
          <BottomNavigationAction
            label="Create Bucket"
            icon={<PlaylistAddIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default BucketActions;
