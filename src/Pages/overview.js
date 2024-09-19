import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Overview() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <Grid
        item
        xs={5}
        sx={{
          border: "1px solid black",
          margin: "28px  0px 20px 50px",
          borderRadius: "6px",
          height: "10%",
        }}
      >
        <Box
          xs={12}
          sx={{
            border: "1px solid rgba(255, 255, 255, 1)",
            position: "absolute",
            height: "52%",
            width: "2%",
            bgcolor: "white",
            margin: "5rem 0rem 0rem 38rem",
            
          }}
        ></Box>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid item xs={1}>
            <Box
              sx={{
                height: "2px",
                width: "20px",
                bgcolor: "rgba(149, 110, 0, 1)",
                margin: "50px 0px 0px 40px",
              }}
            ></Box>
          </Grid>

          <Grid item xs={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                color: "rgba(149, 110, 0, 1)",
                textAlign: "left",
                padding: "38px 0px 7px 17px",
              }}
            >
              Overview
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Box
              sx={{
                height: "2px",
                width: "20px",
                bgcolor: "rgba(149, 110, 0, 1)",
                margin: "50px 0px 0px 0px",
              }}
            ></Box>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              color: "rgba(0, 0, 0, 1)",
              textAlign: "left",
              padding: "15px 0px 10px 25px",
            }}
          >
            About world of joy
          </Typography>
        </Grid>

        <Grid item xs={11} sx={{ display: "flex" }}>
          <Grid item xs={1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Blue_diamond.png/1200px-Blue_diamond.png"
              alt="not found"
              style={{
                height: "6%",
                width: "16%",
                padding: "38px 0px 0px 10px ",
              }}
            />
          </Grid>

          <Grid item xs={10}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "30px 0px 30px 2px",
                lineHeight: "22px",
              }}
            >
              Urbanrise The World of Joy constructed in an alluring green
              environment spread over 10.13 acres of land these aspirational
              Siruseri flats built with the latest MIVAN technology are all
              about living life king size. Strategically located just 10 minutes
              from Sholinganallur.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={11} sx={{ display: "flex" }}>
          <Grid item xs={1}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Blue_diamond.png/1200px-Blue_diamond.png"
              alt="not found"
              style={{
                height: "6%",
                width: "16%",
                margin: "20px 0px 0px 10px ",
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "18px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "10px 0px 45px 2px",
                lineHeight: "22px",
              }}
            >
              The 43,000 sq.ft magnificent clubhouse offers an array of
              jaw-dropping amenities right from Work, Workout to gaming and
              grooming, the banquet hall offers the perfect space and ambiance
              for parties, the co-working spaces and board rooms are a boon to
              residents working from Home.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid
          item
          xs={12}
          sx={{ height: "68vh", width: "100vw", marginLeft: "8rem" }}
        >
          <img
            src="images/OverviewImage.png"
            alt="not found"
            style={{
              height: "100%",
              width: "100%",
              margin: "12px 0px 0px 24px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
