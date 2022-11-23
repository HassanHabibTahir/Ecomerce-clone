import { Container, Grid, Box, Typography, Button } from "@mui/material";
// import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart } from "../Reduxtoolkit/Cart";

export default function Cart() {
  //   const [getData, setGetData] = React.useState();

  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);

  const handleRemoveCart = (id) => {
    dispatch(removefromcart(id));
    alert("Removed from cart");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          {cart?.map((item) => {
            return (
              <Grid
                item
                md={12}
                lg={12}
                sx={{
                  my: "50px",
                  borderBottom: "1px solid #DCDEE3",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img
                      src={"http://localhost:3000" + item?.img}
                      alt="images"
                      width="80%"
                    />
                  </Box>

                  <Typography variant="h2">{item?.title}</Typography>
                  <Typography variant="h2">{item?.price}</Typography>

                  <Button
                    onClick={() => handleRemoveCart(item?.id)}
                    sx={{
                      //   mt: "60px",
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
