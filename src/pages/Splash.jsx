import React from "react";
import splashImage from "../assets/DancingDoodle.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponet";

export const MainLoader = () => {
  const username = "l";
  return { username };
};

function Splash() {
  const { username } = useLoaderData();
  return (
    <div className="text-center">
      {username && <p>Logged in</p>}
      <img className=" w-50 mt-5" src={splashImage} alt="" />
      <Typography
        variant="h2"
        component="h3"
        sx={{
          mt: 2,
          fontWeight: "bold",
          color: "#009473",
          fontFamily: "Source Serif Pro",
        }}
      >
        Playlist For The People And By The People
      </Typography>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima
        facilis veniam, corrupti inventore incidunt reprehenderit, quae soluta
        molestiae pariatur repellendus, itaque tenetur facere voluptatum
        necessitatibus quam quas fugit sequi?
      </p>
      <NavLink to="/bucket">
        <Button
          variant="contained"
          size="large"
          width="70px"
          sx={{ bgcolor: "#767676" }}
        >
          View Bucket
        </Button>
      </NavLink>
    </div>
  );
}

export default Splash;
