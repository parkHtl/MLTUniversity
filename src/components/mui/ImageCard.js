import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImageCard() {
  const itemData = [
    { img: "/images/AAA.jpg", title: "" },
    { img: "/images/1.png", title: "" },
    { img: "/images/EEE.jpg", title: "" },
    { img: "/images/DDD.jpg", title: "" },
    { img: "/images/CCC.jpg", title: "" },
    { img: "/images/BBB.jpg", title: "" },
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
