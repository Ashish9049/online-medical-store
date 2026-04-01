import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import HeroCarousel from "../features/home/components/HeroCarousel";
import FeaturedProducts from "../features/home/components/FeaturedProducts";
import WhyChooseUs from "../features/home/components/WhyChooseUs";
import CategoryProducts from "../features/product/components/CategoryProducts";
import CategorySection from "../features/product/components/CategorySection";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <MainLayout selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}>
      {!selectedCategory ? (
        <>
          <HeroCarousel />
          <CategorySection selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <FeaturedProducts />
          <WhyChooseUs />
        </>
      ) : (
        <CategoryProducts selectedCategory={selectedCategory} />
      )}
    </MainLayout>
  );
};

export default Home;
