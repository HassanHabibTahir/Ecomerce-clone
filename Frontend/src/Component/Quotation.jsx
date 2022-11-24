import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import img from "../assests/rfq.png";
import imgtwo from "../assests/rfqimg.png";

export default function Quotation() {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box
        sx={{
          mt: "30px",
        }}
      >
        {/* <CountUp
          start={0}
          end={100}
          duration={5}
          delay={0.5}
          style={{ color: "red" }}
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={img} alt="img" width="60%" />
          </Box>
          <Typography variant="h2">Request for Quotation</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <img
                src={imgtwo}
                alt="imgtwo"
                style={{
                  width: matches ? "100%" : "670px",
                  // width: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "white",
                border: "6px solid #DCDEE3",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  p: "20px",
                }}
              >
                <Typography variant="h3">
                  One request, multiple quotes
                </Typography>
                <Box
                  sx={{
                    mt: { xs: "50px", md: "100px" },
                    mr: { xs: "10px", md: "130px" },
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter product Name"
                    style={{
                      //   border: "none",
                      width: "100%",
                      padding: "10px",
                      height: "40px",
                      //   borderBottom: "1px solid #DCDEE3",
                      outline: "none",
                    }}
                  />
                  <Box
                    sx={{
                      mt: { xs: "30px", md: "20px" },
                      display: "flex",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Quantity"
                      style={{
                        outline: "none",
                        width: "100%",

                        padding: "5px",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Quantity"
                      style={{
                        outline: "none",
                        marginLeft: "20px",
                        width: "100%",
                        padding: "5px",
                      }}
                    />
                  </Box>
                  <Button
                    sx={{
                      mt: "30px",
                      px: "20px",
                      py: "5px",
                      fontSize: "15px",
                      fontWeight: "bold",
                      backgroundColor: "#FF6600",
                      textTransform: "none",
                      color: "white",
                      borderRadius: "10px",
                      mb: "20px",
                      "&:hover": {
                        backgroundColor: "#FF6600",
                        color: "white",
                      },
                    }}
                  >
                    Request for Quotation
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
