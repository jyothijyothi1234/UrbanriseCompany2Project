import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";
import Box from '@mui/material/Box';

export default function LandingPage() {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
    padding: "15px 18px",
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
    <Grid container xs={12} sx={{ display: "flex", alignItems: "center", position: "relative" }}>
      <Grid
        container
        item
        xs={12}
        sx={{ position: "relative", height: "100vh", width: "100vw" }}
      >
        <img
          src="images/UrbanriseMainImage.png"
          alt="not found"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            position: "absolute",
         
          }}
        />
      

          <Box  xs={12}
          sx={{
            position: "absolute",
            
            bgcolor: "rgba(0, 0, 0, 0.68)",
            height: "100%",
            width: "100%",
          }}>

          </Box>
       
      </Grid>

      <Grid
        container
        item
        xs={11}
        sx={{
          position: "absolute",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={10}
          sx={{
            bgcolor: "rgba(0, 108, 181, 0.2)",
            border: "1px solid rgba(0, 108, 181, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
            
          }}
        >
          <Grid item xs={8} sx={{ margin: "10px 0px 5px 0px" }}>
            <Grid item xs={3}>
              <img
                src="images/theworldofjoyseruseri.png"
                alt="not found"
                style={{ width: "58%", margin: "10px 30px 40px 0px" }}
              />
            </Grid>

            <Grid item xs={7}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "36px",
                  color: "rgba(249, 184, 0, 1)",
                  textAlign: "left",
                  padding: "15px 0px 10px 35px",
                }}
              >
                DESIGNED TO MEET YOUR EVERY DESIRE!
              </Typography>
            </Grid>

            <Grid item xs={9}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "28px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "left",
                  padding: "15px 0px 40px 35px",
                }}
              >
                Launching 1,2 & 3 BHK Premium Gated Community Apartments at
                Siruseri, OMR with 150+ Amenities.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              border: "1px solid rgba(253, 253, 253, 1)",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
              borderTopColor: "rgba(0, 108, 181, 1)",
              borderRadius: "30px",
              bgcolor: "rgba(253, 253, 253, 1)",
            }}
          >
            <Box
              xs={12}
              sx={{
                border: "10px solid rgba(0, 108, 181, 1)",
                bgcolor: "rgba(0, 108, 181, 1)",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                margin: "0px 0px 20px 0px",
              }}
            ></Box>

            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: "rgba(0, 108, 181, 1)",
                  fontSize: "36px",
                  padding: "10px 0px 20px 30px",
                  display: "flex",
                  justifyContent: "flex-start",

                }}
              >
                ENQUIRE NOW
              </Typography>
            </Grid>

            <Grid item xs={9} sx={{ height: "100%" }}>
    <input
      type="text"
      placeholder="     Name"
      style={{
        backgroundColor: "rgba(182, 182, 182, 1)",
        margin: "0px 0px 20px 30px",
       width:"100%",
        borderRadius: "10px",
        height: "50px",
        borderColor: "rgba(253, 253, 253, 1)",
        boxSizing: "border-box",
      }}
    />
  </Grid>


            <Grid item xs={9}   sx={{ height: "100%" }}>
              <input
                type="text"
                placeholder="     Phone number"
                style={{
                  backgroundColor: "rgba(182, 182, 182, 1)",
                  margin: "0px 0px 20px 30px",
                  width:"100%",
                  borderRadius: "10px",
                  height: "50px",
                  borderColor: "rgba(253, 253, 253, 1)",
                }}
              />
            </Grid>

            <Grid item xs={9}   sx={{ height: "100%" }}>
              <input
                type="text"
                placeholder="     Email"
                style={{
                  backgroundColor: "rgba(182, 182, 182, 1)",
                  margin: "0px 0px 20px 30px",
                  width:"100%",
                  borderRadius: "10px",
                  height: "50px",
                  borderColor: "rgba(253, 253, 253, 1)",
                }}
              />
            </Grid>

            <Grid item xs={9}  sx={{height:"100%"}} >
              <BootstrapButton
                variant="contained"
                disableRipple
                sx={{
                  margin: "0px 0px 20px 33px",
                 width:"100%",
                  borderRadius: "10px",
                  height: "55px",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "24px",
                }}
              >
                Submit
              </BootstrapButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        xs={12}
        sx={{
          position: "absolute",
          display: "flex",
          marginTop: "39%",
          
          justifyContent:"flex-end"
        }}
      >
        <Box xs={6}    >
         
        </Box>

        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              border: "1px solid rgba(255, 255, 255, 1)",
              justifyContent: "center",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              bgcolor: "rgba(0, 49, 82, 1)",
              height: "80%",
              alignItems: "center",
              marginTop: "45px",
            }}
          >
            <Grid item xs={1}>
              <PhoneIcon sx={{ color: "rgba(255, 255, 255, 1)" }} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontSize: "24px",
                  color: "rgba(255, 255, 255, 1)",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                CALL NOW
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={6} sx={{ margin: "0px 0px 0px 20px" }}>
            <Grid
              item
              xs={10}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <ChatIcon
                sx={{
                  height: "30%",
                  width: "10%",
                  color: "rgba(255, 255, 255, 1)",
                  bgcolor: "rgba(0, 49, 82, 1)",
                  borderRadius: "5px",
                  margin: "3px 0px 10px 10px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                display: "flex",
                border: "1px solid rgba(0, 0, 0, 1)",
                justifyContent: "center",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                bgcolor: "rgba(249, 184, 0, 1)",
                height: "80%",
                alignItems: "center",
              }}
            >
              <Grid item xs={8}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: "24px",
                    textAlign: "left",
                  }}
                >
                  ENQUIRE NOW
                </Typography>
              </Grid>

              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <AddIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
