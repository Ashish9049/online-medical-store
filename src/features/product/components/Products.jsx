import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProductGrid from "./ProductGrid";
import dummyProducts from "./dummyProducts";

const Products = () => {
  const { category } = useParams();

  const filteredProducts = category
    ? dummyProducts.filter((p) => p.category === category)
    : dummyProducts;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        {category ? `${category} Products` : "All Products"}
      </Typography>

      <ProductGrid products={filteredProducts} />
    </Box>
  );
};

export default Products;