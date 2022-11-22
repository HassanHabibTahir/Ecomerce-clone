import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./product.css";

export default function Productsname() {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box
        sx={{
          mt: "20px",
        }}
      >
        <Box
          sx={{
            borderTop: "1px solid #E6E7EB",
            pt: "10px",
          }}
        >
          <Container maxWidth="xl">
            {matches ? (
              <Box></Box>
            ) : (
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Grid item md={9} lg={9} sm={12} xs={12}>
                  <Box
                    sx={{
                      paddingRight: "130px",
                      pb: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        alignItems: "center",
                      }}
                    >
                      <Box
                        className="dropdown"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          className="dropbtn"
                          sx={{
                            cursor: "pointer",
                          }}
                          variant="h4"
                        >
                          Categories
                        </Typography>

                        <ArrowDropUpIcon className="cuk" />

                        <Box className="dropdown-content">
                          <a href="#home">
                            <Typography
                              className="dropbtn2"
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Machinery / Vehicles & Accessories
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Consumer Electronics / Home Appliances
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Home & Garden / Furniture
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                py: "10px",
                              }}
                            >
                              Fabric & Textiles Raw Material / Home Textiles
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                py: "10px",
                              }}
                            >
                              Beauty & Personal Care / Health & Medical
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                py: "10px",
                              }}
                            >
                              Packaging & Printing / Office & School Supplies
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                py: "10px",
                              }}
                            >
                              Electrical Equipment & Supplies
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h4">Ready to Ship</Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">
                          Personal Protective E...
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h4">Trade Shows</Typography>
                      </Box>
                      <Box
                        className="dropdown2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          className="dropbtn2"
                          variant="h4"
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          Buy Central
                        </Typography>

                        <ArrowDropUpIcon className="cuk2" />

                        <Box className="dropdown2-content2">
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Blog
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Trade Assurance
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Home & Garden / Furniture
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                py: "10px",
                              }}
                            >
                              Logistic Services
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pb: "10px",
                              }}
                            >
                              Letter of Credit
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h4">
                          Sell on Alibaba.com
                        </Typography>
                      </Box>
                      <Box
                        className="dropdown2"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          className="dropbtn2"
                          variant="h4"
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          Help
                        </Typography>

                        <ArrowDropUpIcon className="cuk2" />

                        <Box className="dropdown2-content2">
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              For Buyers
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              For Suppliers
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pt: "10px",
                              }}
                            >
                              Open case
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                py: "10px",
                              }}
                            >
                              Report IPR infringement
                            </Typography>
                          </a>
                          <a href="#home">
                            <Typography
                              variant="h4"
                              sx={{
                                pb: "10px",
                              }}
                            >
                              Report Abuse
                            </Typography>
                          </a>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item md={3} lg={3} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",

                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="h4">Get the App</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderLeft: "1px solid #000",

                        pl: "40px",
                      }}
                    >
                      <Typography variant="h4">English-USD</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderLeft: "1px solid #000",

                        pl: "40px",
                      }}
                    >
                      <Typography variant="h4"> Ship to :</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Container>
        </Box>
      </Box>
    </>
  );
}
