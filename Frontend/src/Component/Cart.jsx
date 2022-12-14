import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
// import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removefromcart,
  increasequantity,
  decreasequantity,
} from "../Reduxtoolkit/Cart";
import { url } from "./Url";

export default function Cart() {
  const matches = useMediaQuery("(max-width:600px)");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(removefromcart(id));
    alert("Removed from cart");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {cart?.map((item, i) => {
            return (
              <Grid
                key={i}
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                sx={{
                  my: "50px",
                  borderBottom: "1px solid #DCDEE3",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: { xs: "center", md: "space-between" },
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`${url}/${item?.image}`}
                      alt="images"
                      style={{
                        width: matches ? "80%" : "100%",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h2"
                    sx={{
                      mt: { xs: "20px", md: "0px" },
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: { xs: "20px", md: "0px" },
                    }}
                    variant="h2"
                  >
                    ${item?.price * item?.quantity}
                  </Typography>
                  {/* //increase quantity */}

                  <Button onClick={() => dispatch(increasequantity(item?.id))}>
                    +
                  </Button>
                  <Typography>{item?.quantity}</Typography>
                  <Button onClick={() => dispatch(decreasequantity(item?.id))}>
                    -
                  </Button>

                  <Button
                    onClick={() => handleRemoveCart(i)}
                    sx={{
                      //   mt: "60px",
                      mt: { xs: "20px", md: "0px" },
                      color: "white",
                      backgroundColor: "#FF6A00",
                      //   px: "10px",
                      //   py: "10px",
                      "&:hover": {
                        backgroundColor: "#FF6A00",
                      },
                    }}
                  >
                    Remove from Cart
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
