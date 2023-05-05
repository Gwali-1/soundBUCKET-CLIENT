import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  dropSongInBucket,
  getTokenId,
  clearToken,
  verifyToken,
} from "../utility";
import { toast } from "react-toastify";
function TrackDisplay({ track, setValue, bucketId }) {
  //
  const addToBucket = async function (event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const songDetails = Object.fromEntries(form);
    console.log(songDetails);
    const token = getTokenId();
    const validToken = await verifyToken(token);
    if (!validToken) {
      clearToken();
      toast.info("Session Expired");
      setValue(0);
      return;
    }
    const response = await dropSongInBucket(songDetails, token);
    if (!response) {
      toast.info("Could not add song at this time");
      redirect("/bucket");
      return;
    }

    toast.success("Added To Bucket");
    console.log(response);
  };

  return (
    <div className="mb-2" id="track-container">
      <form action="" className="row" onSubmit={addToBucket}>
        <div className="col-8">
          <input type="hidden" name="bucket_id" value={bucketId} />
          <input type="hidden" name="title" value={track.title} />
          <input type="hidden" name="song_id" value={track.song_id} />
          <input type="hidden" name="artist_name" value={track.artist_name} />
          <input
            type="hidden"
            name="cover_art_url"
            value={track.cover_art_url}
          />
          <input type="hidden" name="preview_url" value={track.preview_url} />
          <input
            type="hidden"
            name="song_duration"
            value={track.song_duration}
          />
          <input type="hidden" name="external_url" value={track.external_url} />
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
