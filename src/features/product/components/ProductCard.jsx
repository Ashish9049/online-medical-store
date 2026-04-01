import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        height: 320,
        width: 196,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 140,
          width: 140,
          objectFit: "contain",
          p: 1,
          margin: "auto",
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          p: 1,
          gap: 0.5,
        }}
      >
        {/* Product Name - Fixed Height */}
        <Box sx={{ height: 40 }}>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "0.875rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.name}
          </Typography>
        </Box>

        {/* Price */}
        <Typography color="primary" variant="body2" fontWeight="bold">
          ₹{product.price}
        </Typography>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* CTA */}
        <Button
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mt: 0.5 }}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
