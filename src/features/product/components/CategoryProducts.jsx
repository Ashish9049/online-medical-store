import { Box, Typography } from "@mui/material";
import ProductGrid from "./ProductGrid";
import dummyProducts from "./dummyProducts";

const CategoryProducts = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? dummyProducts.filter((product) => product.category === selectedCategory)
    : dummyProducts;

  return (
    <Box sx={{ p: 2, mb: 5 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        {selectedCategory ? `${selectedCategory} Products` : "All Products"}
      </Typography>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <Typography color="text.secondary">
          No products found in this category.
        </Typography>
      )}
    </Box>
  );
};

export default CategoryProducts;
