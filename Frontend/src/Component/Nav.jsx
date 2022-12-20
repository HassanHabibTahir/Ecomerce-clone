import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import logo from "../assests/logo.png";
import Draw from "./Draw";
export default function Nav() {
  const select = useSelector((state) => state.cart);
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          {matches ? (
            <>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                sx={{
                  mt: "-30px",
                }}
              >
                <Grid item xs={10} sm={6}>
                  <img src={logo} alt="logo" width="65%" />
                </Grid>
                <Grid item xs={2}>
                  <Box
                    sx={{
                      mt: { xs: "20px", sm: "0px" },
                    }}
                  >
                    <Draw />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      display: "flex",

                      width: "100%",
                      mt: "10px",
                    }}
                  >
                    <Box
                      className="dropdown"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        px: "10px",
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
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          height: "40px",
                          borderRadius: "30px",
                          border: "2px solid #FF6A00",
                          outline: "none",
                          paddingLeft: "20px",
                          paddingRight: "20px",

                          fontSize: "16px",
                        }}
                      />
                    </Box>
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "#FF6A00",
                        width: "150px",
                        marginLeft: "-50px",
                        borderTopRightRadius: "30px",
                        borderBottomRightRadius: "30px",
                        textTransform: "none",

                        "&:hover": {
                          backgroundColor: "#ff7519",
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                container
                justifyContent="center"
                alignContent="center"
                alignItems="center"
                sx={{
                  mt: "-5px",
                }}
              >
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <Link to="/">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={logo} alt="logo" width="70%" />
                    </Box>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          height: "40px",
                          borderRadius: "30px",
                          border: "2px solid #FF6A00",
                          outline: "none",
                          paddingLeft: "50px",
                          fontSize: "16px",
                        }}
                      />
                    </Box>
                    <Button
                      sx={{
                        color: "white",
                        backgroundColor: "#FF6A00",
                        width: "150px",
                        marginLeft: "-50px",
                        borderTopRightRadius: "30px",
                        borderBottomRightRadius: "30px",
                        textTransform: "none",

                        "&:hover": {
                          backgroundColor: "#ff7519",
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          mt: "0px",
                        }}
                      >
                        <LoginIcon
                          sx={{
                            color: "black",
                            fontSize: "45px",
                            mt: "10px",
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            mt: "10px",
                            fontWeight: 400,
                          }}
                        >
                          Sing in
                          <br />
                          Join in free
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        mt: "10px",
                      }}
                    >
                      <MarkUnreadChatAltIcon
                        sx={{
                          fontSize: "28px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "rbga(0,0,0,0.5)",
                        }}
                      >
                        Messages
                      </Typography>
                    </Box>
                    <Link
                      to="/addproduct"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box>
                        <MonetizationOnIcon
                          sx={{
                            fontSize: "30px",
                            mt: "10px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "rbga(0,0,0,0.5)",
                          }}
                        >
                          Oders
                        </Typography>
                      </Box>
                    </Link>

                    <Link
                      to="/cart"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box>
                        <ShoppingCartCheckoutIcon
                          sx={{
                            fontSize: "30px",
                            mt: "12px",
                            color: select?.length ? "red" : "",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "12px",

                            color: select?.length ? "red" : "",
                          }}
                        >
                          Cart {select?.length}
                        </Typography>
                      </Box>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}
