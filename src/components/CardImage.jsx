import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import itemData from "./IbitengeImageStore";
import { useNavigate } from "react-router-dom";
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

export default function Card() {
  const navigate = useNavigate();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          className="t"
          sx={{
            // height: 450,
            // backgroundColor: "pink",
            // height: 100,
            // maxWeight: 10,
            display: "grid",
            gap: 2,
            gridTemplateColumns: {
              mobile: "repeat(1, 1fr)",
              bigMobile: "repeat(2, 1fr)",
              tablet: "repeat(3, 1fr)",
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
                // style={{ height: 40 }}
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
              <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <button
                  // onClick={() => navigate("cart")}
                  onClick={() => {
                    if (item.id === 1) {
                      return navigate("cart-1");
                    } else if (item.id === 2) {
                      return navigate("cart-2");
                    } else if (item.id === 3) {
                      return navigate("cart-3");
                    } else if (item.id === 4) {
                      return navigate("cart-4");
                    } else if (item.id === 5) {
                      return navigate("cart-5");
                    } else if (item.id === 6) {
                      return navigate("cart-6");
                    } else if (item.id === 7) {
                      return navigate("cart-7");
                    } else if (item.id === 8) {
                      return navigate("cart-8");
                    } else if (item.id === 9) {
                      return navigate("cart-9");
                    } else if (item.id === 10) {
                      return navigate("cart-10");
                    } else if (item.id === 11) {
                      return navigate("cart-11");
                    } else if (item.id === 12) {
                      return navigate("cart-12");
                    } else if (item.id === 13) {
                      return navigate("cart-13");
                    } else if (item.id === 14) {
                      return navigate("cart-14");
                    } else if (item.id === 15) {
                      return navigate("cart-15");
                    } else if (item.id === 16) {
                      return navigate("cart-16");
                    } else if (item.id === 17) {
                      return navigate("cart-17");
                    } else if (item.id === 18) {
                      return navigate("cart-18");
                    } else if (item.id === 19) {
                      return navigate("cart-19");
                    } else if (item.id === 20) {
                      return navigate("cart-20");
                    } else if (item.id === 21) {
                      return navigate("cart-21");
                    } else if (item.id === 22) {
                      return navigate("cart-22");
                    } else if (item.id === 23) {
                      return navigate("cart-23");
                    } else if (item.id === 24) {
                      return navigate("cart-24");
                    } else if (item.id === 25) {
                      return navigate("cart-25");
                    } else if (item.id === 26) {
                      return navigate("cart-26");
                    } else if (item.id === 27) {
                      return navigate("cart-27");
                    } else if (item.id === 28) {
                      return navigate("cart-28");
                    } else if (item.id === 29) {
                      return navigate("cart-29");
                    } else if (item.id === 30) {
                      return navigate("cart-30");
                    }
                  }}
                  type="button"
                  className="btn-buy btn btn-outline-danger"
                >
                  View Details
                </button>
                {/* <MuiDialog /> */}
              </CardContent>
            </ImageListItem>
          ))}
        </Box>
      </ThemeProvider>
    </>
  );
}

// const itemData = [
//   {
//     img: "https://i.pinimg.com/originals/93/63/50/9363504e61bf1e43f971722d4c809eb0.jpg",
//     title: "Breakfast",
//     author: "@bkristastucchio",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: "https://i.pinimg.com/originals/93/63/50/9363504e61bf1e43f971722d4c809eb0.jpg",
//     title: "Bike",
//     author: "@southside_customs",
//     cols: 2,
//   },
// ];
