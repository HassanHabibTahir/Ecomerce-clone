import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import axios from "axios";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EastIcon from "@mui/icons-material/East";
import "./product.css";
import Slideritem from "./Slideritem";
import boxone from "../assests/boxone.jpg";
import boxtwo from "../assests/boxtwo.jpg";

import Quotation from "./Quotation";
import BuyProduct from "./BuyProduct";

let product = [
  "Consumers Electronics",
  "Apparel",
  "Vehicle Parts",
  "Sports & Entertainment",
  "Industrial Machinery",
  "Home & Garden",
  "Beauty",
  "All Categories",
];

export default function Slider() {
  const [displaypro, setDisplaypro] = React.useState([]);
  const getProduct = async () => {
    await axios.get("http://localhost:3000/displayproduct").then((res) => {
      setDisplaypro(res.data);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);
  const displayproduct = displaypro;

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F2F3F7",
        }}
      >
        <Box
          sx={{
            px: { xs: "0px", md: "50px" },
            py: "10px",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                mt: { xs: "10px", md: "20px" },

                backgroundColor: "white",

                pt: "50px",
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={12} md={2}>
                  <Box
                    sx={{
                      px: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",

                        borderBottom: "1px solid #ededed",
                      }}
                    >
                      My markets
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {product.map((item, i) => {
                        return (
                          <>
                            <Box
                              key={i}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                variant="h4"
                                sx={{
                                  pt: "15px",
                                }}
                              >
                                {item}
                              </Typography>
                              <KeyboardArrowRightIcon
                                sx={{
                                  color: "#b3b3b3",
                                  mt: "15px",
                                }}
                              />
                            </Box>
                          </>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5}>
                  <Box
                    sx={{
                      mt: { xs: "20px", md: "0px" },
                    }}
                  >
                    <Slideritem />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={2.5}>
                  <Box
                    sx={{
                      px: "10px",
                    }}
                  >
                    <Box>
                      <Typography variant="h4">
                        Sign up to enjoy exciting Buyers Club benefits
                      </Typography>
                      <Button
                        sx={{
                          color: "white",
                          mt: "10px",
                          width: "100%",
                          fontSize: "13px",
                          fontWeight: "bold",
                          borderRadius: "10px",
                          backgroundColor: "#FF6A00",
                          "&:hover": {
                            backgroundColor: "#FF6A00",
                          },
                        }}
                      >
                        Join For Free
                      </Button>
                      <Button
                        sx={{
                          width: "100%",
                          mt: "10px",
                          border: "1px solid black",
                          fontSize: "13px",
                          color: "black",

                          borderRadius: "10px",
                        }}
                      >
                        Singin
                      </Button>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            mt: "10px",
                          }}
                        >
                          Buyers Club
                        </Typography>
                        <EastIcon
                          sx={{
                            mt: "10px",
                            ml: "15px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#F2F3F7",
                          mt: "10px",
                          py: "5px",
                          px: "10px",
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              mt: "15px",
                            }}
                          >
                            Us $10 off with a new supplier
                          </Typography>
                          <img src={boxone} alt="box" width="30%" />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#F2F3F7",
                          mt: "5px",
                          px: "10px",
                          borderRadius: "10px",
                          py: "5px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              mt: "15px",
                            }}
                          >
                            Us $10 off with a new supplier
                          </Typography>
                          <img src={boxtwo} alt="box" width="30%" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                mt: { xs: "10px", md: "40px" },
              }}
            >
              <Grid container spacing={1.5}>
                {Object.keys(displayproduct).map((item, i) => {
                  return (
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <Box
                        key={i}
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            p: "10px",
                          }}
                        >
                          {" "}
                          {item}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {displayproduct[item].map(
                            ({ img, price, status, id }, i) => {
                              return (
                                <Box
                                  key={i}
                                  sx={{
                                    backgroundColor: "white",
                                    p: "2px",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      backgroundColor: "#F2F3F7",
                                      py: "5px",
                                      px: "5px",
                                      width: "100%",
                                      transition: "0.3s",

                                      cursor: "pointer",
                                      "&:hover": {
                                        transform: "scale(1.1)",
                                      },
                                    }}
                                  >
                                    <img
                                      src={" http://localhost:3000" + img}
                                      alt="img"
                                    />
                                  </Box>
                                  <Typography
                                    variant="h5"
                                    sx={{
                                      textAlign: "center",
                                      mt: "10px",
                                    }}
                                  >
                                    {price}
                                  </Typography>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      textAlign: "center",
                                      mb: "5px",
                                    }}
                                  >
                                    {status}
                                  </Typography>
                                </Box>
                              );
                            }
                          )}
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box>
              <Quotation />
            </Box>
            <Box>
              <BuyProduct />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
