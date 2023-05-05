import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
function TrackDisplay({ track, addToBucket }) {
  return (
    <div className="mb-2" id="track-container">
      <form action="" className="row" onSubmit={addToBucket}>
        <div className="col-8">
          <input type="hidden" name="ulr" />
          <input type="hidden" name="age" />
          <input type="hidden" name="many" />
          <div>
            <img src={track.cover_art_url} alt="" width={30} />
            {track.title}-{track.artist_name}
          </div>
        </div>
        <div className="col-4 bg">
          <button
            style={{
              border: "none",
              background: "transparent",
              padding: 0,
            }}
          >
            <Fab color="success" aria-label="add" size="small">
              <AddIcon />
            </Fab>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TrackDisplay;
