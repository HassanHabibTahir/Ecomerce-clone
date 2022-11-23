import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../Reduxtoolkit/Cart";

export default function ProductDetail({ data }) {
  const matches = useMediaQuery("(max-width:900px)");
  const { productId } = useParams();
  const product = data.find((item) => item.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const handleCart = (product) => {
    dispatch(addtocart(product));
    alert("Added to cart");
  };
  return (
    <>
      <Box
        sx={{
          mt: { xs: "50px", md: "100px" },
          mb: { xs: "100px", md: "200px" },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <img
                  src={"http://localhost:3000" + product?.img}
                  alt="images"
                  style={{
                    width: matches ? "100%" : "",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  mt: { xs: "50px", md: "0px" },
                }}
              >
                <Typography variant="h3">{product?.title}</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mt: "10px",
                  }}
                >
                  {product?.details}
                </Typography>
                <Typography
                  sx={{
                    mt: "10px",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  Price: {product?.price}
                </Typography>
                <Typography
                  sx={{
                    mt: "10px",
                    fontSize: "20px",
                  }}
                >
                  {product?.stock}
                </Typography>
                <Button
                  onClick={() => handleCart(product)}
                  sx={{
                    mt: "60px",
                    color: "white",
                    backgroundColor: "#FF6A00",
                    px: "10px",
                    py: "10px",
                    "&:hover": {
                      backgroundColor: "#FF6A00",
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
