import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

//search song

function BucketActions() {
  const [value, setValue] = React.useState(0);
  const [songs, setSongs] = React.useState(null);
  return (
    <>
      {value === 1 && (
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            margin: "0px auto 0px auto",
          }}
        >
          <TextField
            fullWidth
            label="Search Song"
            id="fullWidth"
            onChange={(e) => {
              fetch(
                `http://127.0.0.1:8000/sportify/find_song?track=${e.target.value}`,
                { method: "POST" }
              )
                .then((response) => response.json())
                .then((result) => {
                  setSongs(result);
                })
                .catch((err) => {
                  setSongs(null);
                });
            }}
          />

          <div className="p-2 border">
            {songs &&
              songs.map((song) => {
                return (
                  <li>
                    {song.title}-{song.artist_name}
                  </li>
                );
              })}
          </div>
        </Box>
      )}

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
