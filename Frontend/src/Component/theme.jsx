import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "30px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 700,
    },

    h4: {
      fontSize: "15px",
      fontWeight: 300,
      "&:hover": {
        color: "#FF6A00",

        cursor: "pointer",
      },
    },
    h5: {
      fontSize: "12px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "12px",
    },
    h7: {
      fontSize: "18px",
      fontWeight: 300,
    },
    h8: {
      fontSize: "18px",
      fontWeight: 600,
    },
    h9: {
      fontSize: "14px",
      fontWeight: 300,
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    "@global": {
      body: {
        fontFamily: "Poppins, sans-serif",
      },
      ".img-fluid": {
        maxWidth: "100%",
        height: "auto",
      },
    },
  },
};

theme = responsiveFontSizes(theme);

export default theme;
