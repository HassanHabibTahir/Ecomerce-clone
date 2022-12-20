import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { url } from "./Url";
import axios from "axios";

const productInputs = [
  { name: "name", type: "text", placeholder: "Enter Product Name" },
  { name: "price", type: "number", placeholder: "Enter Product Price" },
  {
    name: "description",
    type: "text",
    placeholder: "Enter Product Description",
  },
  { name: "image", type: "file", placeholder: "Enter Product Image" },
  { name: "category", type: "text", placeholder: "Enter Product Category" },
  { name: "quantity", type: "number", placeholder: "Enter Product Quantity" },
];
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    formData.append("category", data.category);
    formData.append("quantity", data.quantity);
    try {
      const { data } = await axios.post(`${url}/addproduct`, formData);
      console.log(data);
      reset();
      <Alert severity="success">Product Add </Alert>;
    } catch (err) {
      console.log(err);
      <Alert severity="error">{err} </Alert>;
    }

    console.log(data);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h1" textAlign="center" mt={"50px"}>
          Add Product
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {productInputs.map(({ name, type, placeholder }, index) => (
            <Box key={index} my={"20px"}>
              <Typography variant="h2" py={"10px"}>
                {name.toUpperCase()}
              </Typography>
              <TextField
                required
                fullWidth
                {...register(name)}
                type={type}
                placeholder={placeholder}
              />
            </Box>
          ))}
          <Box my={"40px"} display={"flex"} justifyContent={"flex-end"}>
            <Button
              type="submit"
              sx={{
                color: "white",
                backgroundColor: "#FF6A00",
                px: "20px",
                py: "10px",

                "&:hover": {
                  backgroundColor: "#FF6A00",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default AddProduct;
