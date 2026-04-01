import { useState } from "react";
import HeroCarousel from "../features/home/components/HeroCarousel";
import FeaturedProducts from "../features/home/components/FeaturedProducts";
import WhyChooseUs from "../features/home/components/WhyChooseUs";
// import CategoryProducts from "../features/product/components/CategoryProducts";
import CategorySection from "../features/product/components/CategorySection";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
};

export default Home;