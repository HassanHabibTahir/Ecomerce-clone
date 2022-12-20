import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../Reduxtoolkit/Cart";
import { url } from "./Url";
import axios from "axios";

// import ReactImageMagnify from "react-image-magnify";

export default function ProductDetail({ data }) {
  console.log(data, "productdetail");
  const matches = useMediaQuery("(max-width:600px)");
  const [value, setValue] = React.useState(2);
  const [commentbtn, setCommentbtn] = React.useState(false);
  const [commentValue, setCommentValue] = React.useState([]);
  const [comment, setComment] = React.useState("");
  const { productId } = useParams();

  console.log({ productId }, "productId");

  const product = data.find((item) => item._id === productId);
  console.log(product, "product");

  const getCommentData = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/comment`);
      const commentdata = response.data.filter(
        (item) => item.userId === productId
      );
      console.log(commentdata, "commentdata");
      setCommentValue(commentdata);
    } catch (err) {
      console.log(err);
    }
  }, [productId]);

  const deleteComment = async (id) => {
    try {
      const { data } = await axios.delete(`${url}/comment/${id}`);
      console.log(data, "data");
    } catch (err) {
      console.log(err);
    }
  };

  const CommentPost = async () => {
    try {
      const { data } = await axios.post(`${url}/comment`, {
        userId: productId,
        comment: comment,
        rating: value,
      });
      console.log(data, "data");
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmitcomment = async (e) => {
    e.preventDefault();
    await CommentPost();
    await getCommentData();
    setCommentbtn(false);
  };
  useEffect(() => {
    getCommentData();
  }, [getCommentData]);
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
          mt: { xs: "50px", md: "130px" },
          mb: { xs: "100px", md: "200px" },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            // justifyContent="center"
            // alignContent="center"
            // alignItems="center"
          >
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                {/* <CursorZoom
                  image={{
                    src: url + product?.img,
                    width: 300,
                    height: 300,
                  }}
                  zoomImage={{
                    src: url + product?.img,
                    width: 500,
                    height: 200,
                  }}
                  cursorOffset={{ x: 80, y: -80 }}
                /> */}
                <img
                  alt="images"
                  src={`${url}/${product?.image}`}
                  style={{
                    width: matches ? "100%" : "",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <Rating
                  sx={{
                    mt: "50px",
                    ml: { xs: "0px", md: "50px" },
                  }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
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
                <Typography variant="h3">{product?.name}</Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mt: "40px",
                  }}
                >
                  {product?.description}
                </Typography>
                <Typography
                  sx={{
                    mt: "10px",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  Price: ${product?.price}
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
              <form onSubmit={handleSubmitcomment}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  {commentbtn ? (
                    <></>
                  ) : (
                    <>
                      <Button
                        onClick={() => setCommentbtn(!commentbtn)}
                        sx={{
                          color: "white",
                          backgroundColor: "#FF6A00",

                          mt: { md: "70px", xs: "-50px" },

                          "&:hover": {
                            backgroundColor: "#FF6A00",
                          },
                        }}
                      >
                        {commentbtn ? "" : "Add Comment"}
                      </Button>
                    </>
                  )}
                </Box>

                {commentbtn && (
                  <Box sx={{ ml: "0px", mt: "20px" }}>
                    <input
                      type="text"
                      placeholder="Add Comment"
                      onChange={(e) => setComment(e.target.value)}
                      style={{
                        padding: "10px",
                        fontSize: "16px",
                        width: "100%",
                        height: "50px",
                      }}
                    />
                    <Button
                      type="submit"
                      onClick={CommentPost}
                      sx={{
                        color: "white",
                        backgroundColor: "#FF6A00",
                        mt: "20px",
                        "&:hover": {
                          backgroundColor: "#FF6A00",
                        },
                      }}
                    >
                      Post
                    </Button>
                    <Button
                      onClick={() => setCommentbtn(false)}
                      sx={{
                        color: "white",
                        backgroundColor: "red",

                        mt: "20px",
                        ml: "30px",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                )}
              </form>
              {commentValue?.map(({ comment, _id }, index) => {
                return (
                  <Box
                    key={index}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box
                      sx={{
                        mt: "30px",
                        borderBottom: "1px solid black",
                      }}
                    >
                      {comment}
                    </Box>

                    <DeleteIcon onClick={() => deleteComment({ _id })} />
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
