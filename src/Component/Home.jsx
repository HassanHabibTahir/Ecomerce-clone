import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";
import Productsname from "./Productsname";
import Slider from "./Slider";

export default function Home() {
  return (
    <>
      <Box>
        <Productsname />
        <Slider />
      </Box>
    </>
  );
}
