import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar() {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "10px 18px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    borderRadius: "10px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <AppBar position="fixed" sx={{ bgcolor: "rgba(0, 0, 0, 1)", padding: "10px 0" }}>
      <Toolbar>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={2}>
            <img
              src="images/UrbanriseLogo.png"
              alt="Logo"
              style={{ height: "100%", width: "60%", maxHeight: "60px" }}
            />
          </Grid>

          <Grid item xs={2}>
            <BootstrapButton variant="contained" disableRipple>
              Project Highlights
            </BootstrapButton>
          </Grid>

          <Grid item xs={1}>
            <NavLink to="/overview" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Overview
              </Typography>
            </NavLink>
          </Grid>

          <Grid item xs={1}>
            <NavLink to="/pricedetails" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
              >
                Price Details
              </Typography>
            </NavLink>
          </Grid>

          <Grid item xs={1}>
            <NavLink
              to="/Projecthighlights"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
              >
                Amenities
              </Typography>
            </NavLink>
          </Grid>

          <Grid item xs={1}>
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
            >
              Gallery
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)" }}
            >
              Location Advantages
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="h6"
              sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 1)",display:"flex",justifyContent:"flex-start" }}
            >
              Walkthrough Video
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

