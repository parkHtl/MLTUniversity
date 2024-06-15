import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImageCard() {
  const itemData = [
    { img: "/images/3.png", title: "Bed" },
    { img: "/images/1.png", title: "Kitchen" },
    { img: "/images/2.png", title: "Sink" },
    { img: "/images/4.png", title: "Kitchen" },
    { img: "/images/6.png", title: "Sink" },
    { img: "/images/5.png", title: "Kitchen" },
  ];

  return (
    <ImageList
      sx={{ width: 'full', height: 500 , paddingRight: '20px', overflow:'hidden'}}
      variant="woven"
      cols={3}
      gap={20}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="hover:scale-150 transform transition duration-500 ease-in-out"
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
