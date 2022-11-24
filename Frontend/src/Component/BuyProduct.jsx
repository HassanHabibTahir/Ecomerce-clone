import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Reduxtoolkit/ProductSlice";

export default function BuyProduct() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  });
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
          {data?.map(({ img, title, price, stock, id }, i) => {
            return (
              <Grid item xs={6} sm={4} md={2}>
                <Link
                  to={`/product/${id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Box
                    key={i}
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
                      <img
                        src={"http://localhost:3000" + img}
                        alt="images"
                        width="100%"
                      />
                    </Box>
                    <Typography
                      sx={{
                        pl: "10px",
                      }}
                      variant="h7"
                    >
                      {title}
                      <br />
                    </Typography>
                    <Typography
                      sx={{
                        pl: "10px",
                        mt: "20px",
                      }}
                    >
                      {price}
                      <br />
                    </Typography>
                    <Typography
                      sx={{
                        pl: "10px",
                        fontSize: "16px",
                        mb: "10px",
                      }}
                    >
                      {stock}
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
