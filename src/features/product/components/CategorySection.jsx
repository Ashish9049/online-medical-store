import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  "Tablets",
  "Syrups",
  "Medical Devices",
  "Personal Care",
  "Ayurvedic",
  "Baby Care",
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        borderBottom: "1px solid #eee",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Typography
            key={category}
            onClick={() => navigate(`/products/${category}`)}
            sx={{
              cursor: "pointer",
              fontWeight: 500,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CategorySection;