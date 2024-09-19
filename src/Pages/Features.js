import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DoneIcon from "@mui/icons-material/Done";
import { Opacity } from "@mui/icons-material";

export default function Features() {
  return (
    <Grid container item xs={12} sx={{ margin: "10rem 0rem 1rem 0rem" }}>
      <Grid
        item
        xs={6}
        sx={{
          height: "60vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={10}
          sx={{
            height: "100%",
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "70%",
              bgcolor: "rgba(249, 184, 0, 1)",
              margin: "20px 0px 0px 0px",
              borderRadius: "5px",
              transform: "rotate(-10deg)",
              transformOrigin: "center",
            }}
          ></Box>
        </Grid>

        <Grid
          item
          xs={10}
          sx={{
            height: "60%",
            width: "40%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "70%",
              bgcolor: "rgba(249, 184, 0, 0.2)",
              margin: "20px 0px 0px 0px",
              borderRadius: "5px",
              transform: "rotate(12deg)",
              transformOrigin: "center",
            }}
          ></Box>
        </Grid>

        <Grid
          item
          xs={10}
          sx={{
            height: "60%",
            width: "40%",
            position: "absolute",
            margin: "10px  0px 0px 0px",
          }}
        >
          <img
            src="images/ProjectHighlight.png"
            alt="not found"
            style={{
              height: "100%",
              width: "75%",
              border: "12px solid rgba(255, 255, 255, 1)",
              borderRadius: "5px",
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={6}   sx={{position: "relative"}}>
        <Grid
          item
          xs={12}
          sx={{ position: "absolute",width:"100%",height:"100%", }}
        >
          <img
            src="images/features.png"
            alt="not found"
            style={{opacity: 0.1,width:"100%",height:"100%"}}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{  position: "relative",  }}
        >
                    <Grid item xs={7}    sx={{display: "flex", paddingLeft: "26px",}}>

          <Grid item xs={1} >
            <Box
              sx={{
                height: "2px",
                width: "23px",
                bgcolor: "rgba(100, 74, 0, 1)",
                margin: "9px 0px 0px 5px",
                display:"flex",
               
              }}
            ></Box>
          </Grid>

          <Grid item xs={2} >
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                color: "rgba(100, 74, 0, 1)",
                padding: "0px 0px 20px 0px",
               display:"flex",
               justifyContent:"flex-start",
              
              }}
            >
              Features
            </Typography>
          </Grid>

          <Grid item xs={2}  >
            <Box
              sx={{
                height: "2px",
                width: "23px",
                bgcolor: "rgba(100, 74, 0, 1)",
                margin: "12px 0px 0px 13px",
              }}
            ></Box>
          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              color: "rgba(0, 0, 0, 1)",
              textAlign: "start",
              paddingLeft: "35px",
            }}
          >
            Project Highlights
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "40px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>

          <Grid item xs={11}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "43px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              The World of Joy has created a buzz in the city, setting new
              standards of futuristic living.
            </Typography>
          </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "13px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Grid item xs={11}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "20px",
                  textAlign: "left",
                  color: " rgba(0, 0, 0, 1)",
                  padding: "15px 0px 30px 0px",
                  lineHeight: "22px",
                }}
              >
                Located at Siruseri, one of Asia's Largest IT Parks and
                Chennai's fastest growing commercial and residential hub.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "12px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "15px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              75,000 Sq. Ft. of Never before Rooftop Amenities
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "12px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "15px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              45,000 Sq. Ft. Cosmo Clubhouse
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "12px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                // padding: "15px 0px 30px ",
                padding: "15px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              24,000 Sq. Ft. "Tower to Tower" Amenities
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "12px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "15px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              12,000 Sq. Ft. Urbanrise Genius-Children's Learning Hub
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "12px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "15px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              15,000 Sq. Ft. of Co-Working Spaces
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <DoneIcon
              sx={{
                padding: "12px 15px 30px 0px",
                color: "rgba(100, 74, 0, 1)",
              }}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                textAlign: "left",
                color: " rgba(0, 0, 0, 1)",
                padding: "15px 0px 30px 0px",
                lineHeight: "22px",
              }}
            >
              Over 1 Acre of Large Park with Amenities for Everyone in the
              Family
            </Typography>
          </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
