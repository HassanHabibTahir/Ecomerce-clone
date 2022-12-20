import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Reduxtoolkit/ProductSlice";
import { url } from "./Url.js";

export default function BuyProduct() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const Products = useSelector((state) => state.products.data);

  const data = Products;

  // console.log(Products, "Products--->");
  return (
    <>
      <Box
        sx={{
          mt: "30px",
        }}
      >
        <Grid container spacing={2}>
          {data?.map(({ image, name, price, _id, description }, i) => {
            return (
              <Grid key={i} item xs={6} sm={4} md={2}>
                <Link
                  to={`/product/${_id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "white",
                      border: "1px solid #DCDEE3",
                      transition: "box-shadow .3s",
                      "&:hover": {
                        boxShadow: "0 0 11px rgba(33,33,33,.2)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        pt: "10px",
                      }}
                    >
                      <img src={`${url}/${image}`} alt="images" width="100%" />
                    </Box>
                    <Typography
                      sx={{
                        pl: "10px",
                      }}
                      variant="h7"
                    >
                      {name}

                      <br />
                    </Typography>
                    <Typography
                      sx={{
                        pl: "10px",
                        mt: "20px",
                      }}
                    >
                      ${price}
                      <br />
                    </Typography>
                    <Typography
                      sx={{
                        pl: "10px",
                        fontSize: "16px",
                        mb: "10px",
                      }}
                    >
                      Quantity 10
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
