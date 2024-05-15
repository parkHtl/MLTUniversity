import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";

export default function SimpleCard() {
  return (
    <div className="">
      <div className=" w-[100%]  h-[100%]">
        <Card
          sx={{
            maxWidth: "full",
            height: 250,
            width: "full",
            background: "linear-gradient(to top right, #ff4694, #160ce4)",
            opacity: 0.8,
          }}
        >
          <CardActionArea>
            <CardContent sx={{ marginLeft: "10px" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "white", paddingTop: "5px" }}
              >
                RPL/CREDIT EXEMPTIONS
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" ,fontSize: 13}}
              >
                Those with work experience at a laboratory registered with PHSRC
                or at a government establishment OR those with other relevant
                MLT qualifications will be assessed on case by case by our
                academic council followed with an aptitude test for providing of
                Credit exemptions. Those who has more than 5 years work
                experience are exempted from the CPT
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
      </div>
    </div>
  );
}
