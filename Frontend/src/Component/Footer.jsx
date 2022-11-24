import { Box, Button, Grid, Typography, Container } from "@mui/material";
import React from "react";

let footerdata = {
  "Coustmer services": [
    "Help Center",
    "Report abuse",
    "Open a case",
    "Policies & rules",
    "Get paid for your feedback",
  ],
  "About us": [
    "About Alibaba.com",
    "About Alibaba Group",
    "Site map",
    "Alibaba.com Blog",
  ],
  "Source on Alibaba.com": [
    "Resources",
    "All categories",
    "Request for Quotation",
    "Ready to Ship",
    "Buyer partners",
    "Alibaba.com Select",
  ],
  "Sell on Alibaba.com": [
    "Supplier memberships",
    "Learning Center",
    "Partner Program",
  ],
  "Trade services": [
    "Trade Assurance",
    "Business identity",
    "Logistics services",
    "Production Monitoring & Inspection Services",
    "Letter of Credit",
  ],
};

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          mt: "50px",

          backgroundColor: "#445268",
          color: "white",
        }}
      >
        <Box
          sx={{
            pt: "50px",
            px: { xs: "30px", md: "0px" },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
            }}
          >
            Trade Alert - Delivering the latest product trends and industry news
            straight to your inbox.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Enter your email"
              style={{
                width: "300px",
                height: "40px",
                outline: "none",
                backgroundColor: "#313D51",
                border: "1px solid #DCDEE3",
                padding: "10px",
                color: "white",
              }}
            />
            <Button
              sx={{
                ml: "10px",
                border: "1px solid #DCDEE3",
                backgroundColor: "#445268",
                color: "white",
                px: "20px",
                height: "40px",
              }}
            >
              Subscribe
            </Button>
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              textAlign: "center",
              color: "#8E9994",
              mt: "10px",
            }}
          >
            We’ll never share your email address with a third-party.
          </Typography>
        </Box>
        <Container
          maxWidth="lg"
          sx={{
            mt: "50px",
          }}
        >
          <Grid
            container
            spacing={1}
            // justifyContent="center"
            sx={{
              borderBottom: "1px solid #313D52",
            }}
          >
            {Object.keys(footerdata).map((item, i) => {
              return (
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={2}
                  sx={{
                    ml: "30px",
                    mb: "30px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                  <Box>
                    {footerdata[item].map((item, i) => {
                      return (
                        <Typography
                          sx={{
                            fontSize: "14px",
                            mt: "10px",
                          }}
                        >
                          {item}
                        </Typography>
                      );
                    })}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: "20px",
            }}
          >
            <Typography>
              © 1999-2021 Alibaba.com. All rights reserved.
            </Typography>
            <Box>
              <Typography>Follow us on: social Media Sites</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
