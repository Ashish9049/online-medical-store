import { Box, Typography } from "@mui/material";
import ProductGrid from "../../product/components/ProductGrid";
import dummyProducts from "../../product/components/dummyProducts";
const FeaturedProducts = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Popular Medicines
      </Typography>

      <ProductGrid products={dummyProducts} />
    </Box>
  );
};

export default FeaturedProducts;
