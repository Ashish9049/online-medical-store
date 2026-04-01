import { Grid, Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
