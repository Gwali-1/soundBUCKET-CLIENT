import React, { useState, useEffect } from "react";
import BucketActions from "../components/BucketActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import NavbarComponent from "./NavbarComponet";

function BucketContent() {
  //useffect to get user info ,  buckets
  //   const [messages, setMessages] = React.useState(messageExamples);
  const user = {
    username: "frank",
  };

  return (
    <div className="container  ">
      <NavbarComponent status={user} />
      <div className="container ">
        <Typography
          variant="h2"
          component="h3"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#009473",
            fontFamily: "Source Serif Pro",
            textAlign: "center",
          }}
        >
          This Month
        </Typography>
      </div>
      {/* <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar
                sx={{ border: "1px solid green" }}
                alt="Profile Picture"
                src={person}
              />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List> */}
      <BucketActions bucketName={"name"} />
    </div>
  );
}

export default BucketContent;
