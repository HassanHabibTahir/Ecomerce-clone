import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assests/logo.png";

// import "./dra.css";

import { Drawer, List, Box, IconButton, Typography } from "@mui/material";

export default function Draw() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Box>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "white",
              color: "black",
              width: "150px",
            },
          }}
          open={openDrawer}
          anchor="left"
          sx={{ textAlign: "center", color: "black" }}
          onClose={() => setOpenDrawer(false)}
        >
          <List sx={{ color: "black", backgroundColor: "white", mt: "0px" }}>
            <Box>
              <img src={logo} alt="logo" width="90%" />
            </Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                borderBottom: "1px solid grey",
                pb: "10px",
              }}
            >
              {" "}
              Singin or Join
            </Typography>
            <Typography
              sx={{
                color: "black",
                py: "10px",
                fontSize: "16px",
                borderBottom: "1px solid grey",
              }}
            >
              Messages
            </Typography>
            <Typography
              sx={{
                color: "black",
                py: "10px",
                fontSize: "16px",
                borderBottom: "1px solid grey",
              }}
            >
              Oders
            </Typography>
            <Typography
              sx={{
                color: "black",
                py: "10px",
                fontSize: "16px",
                borderBottom: "1px solid grey",
              }}
            >
              Cart
            </Typography>
          </List>
        </Drawer>
      </Box>
      <IconButton
        focusRipple={false}
        sx={{ color: "black", fontSize: "80px" }}
        edge="end"
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          sx={{
            mt: { xs: "0px", sm: "30px" },
            fontSize: {
              sm: "35px",
              xs: "35px",
              md: "50px",
              lg: "60px",
              xl: "70px",
            },
          }}
        />
      </IconButton>
    </>
  );
}
