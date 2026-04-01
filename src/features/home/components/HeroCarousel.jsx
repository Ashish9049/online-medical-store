import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../../assets/banners/banner1.jpg";
import banner2 from "../../../assets/banners/banner2.jpg";
import banner3 from "../../../assets/banners/banner3.png";
import banner4 from "../../../assets/banners/banner4.png";
import banner5 from "../../../assets/banners/banner5.jpg";

const banners = [banner1, banner2, banner3, banner4, banner5];

const HeroCarousel = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={img}
              alt="banner"
              sx={{
                width: "100%",
                height: { xs: 180, sm: 280, md: 360 },
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
