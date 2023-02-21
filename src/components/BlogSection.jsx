// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// export default function BlogSection() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 200 }}
//         image="https://cdn.shopify.com/s/files/1/0684/2619/articles/D_Iyanu_Blog_Banner_1800x1000_1_400x.jpg?v=1675182377"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           INFORMATION WORKSHOP ABOUT IGITENGE FASHION
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           This up coming weeks. every one is invited to join free workshop about
//           fashion.
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Read More....</Button>
//       </CardActions>
//     </Card>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
// import magazine from "../images/IGITENGE-STYLE-Magazine.png";
import { useNavigate } from "react-router-dom";
// console.log(magazine);
// import { AspectRatio } from "@mui/icons-material";
// import CardActions from "@mui/material";
// import CardActions from "@mui/material/CardActions";
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 390,
      bigMobile: 350,
      tablet: 650,
      desktop: 900,
    },
  },
});

export default function BlogSection() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="blog-box"
        sx={{
          // height: 100,
          // backgroundColor: "pink",
          // height: 100,
          // maxWeight: 10,
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(2, 1fr)",
            tablet: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ height: 200 }}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            {/* <ImageListItemBar
              title={item.title}
              className="cardText"
              // subtitle={item.author}
              // position="below"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            /> */}
            <CardContent className="blog-content" style={{ paddingLeft: 0 }}>
              <Typography gutterBottom variant="h5" component="div">
                {/* INFORMATION WORKSHOP ABOUT IGITENGE FASHION */}
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                // style={{ height: 105 }}
              >
                {item.details}
              </Typography>
              <CardActions className="blog-button">
                <p
                  onClick={() => {
                    if (item.id === 1) {
                      return navigate("blog-1");
                    } else if (item.id === 2) {
                      return navigate("blog-2");
                    } else if (item.id === 3) {
                      return navigate("blog-3");
                    }
                  }}
                >
                  Read More
                </p>
                {/* <Button size="small" className="blogg-button">
                
                  Learn More
                </Button> */}
              </CardActions>
            </CardContent>
            {/* <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 1 }}
            >
              <Button variant="contained">Read More...</Button>
            </Stack> */}
          </ImageListItem>
        ))}
      </Box>
    </ThemeProvider>
  );
}

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "INFORMATION WORKSHOP ABOUT IGITENGE FASHION",
    details:
      "This up coming weeks. every one is invited to join free workshop about fashion ... ",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0684/2619/articles/D_Iyanu_Blog_Banner_1800x1000_f49306fd-89cb-48be-9ebe-0fcd788ada4d_1400x.png?v=1656613186",
    title: "Top Celebrity Approved Trends Took Igitenge To Next level.",
    details:
      "Sometimes dressing cute is kind of an issue for celebrity, especially in conecrt and other places. The ideas with igitenge clothing for this celebrity are on the next level ...",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=596&q=80",
    title: "Best Bag for women made in igitenge",
    details:
      "Igitenge can't be styling on or wearing it only. But as it can also be made into bags, shoes,  and so on ... ",
  },
  // {
  //   img: magazine,
  //   title: "Igitenge Magazine",
  //   details: "Igitenge Magazine is out now you can read it now ...",
  // },
];
