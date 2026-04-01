import { Box, Typography } from "@mui/material";

const categories = [
  "Tablets",
  "Syrups",
  "Medical Devices",
  "Personal Care",
  "Ayurvedic",
  "Baby Care",
];

const CategorySection = ({ selectedCategory, onCategoryChange }) => {
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
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Typography
            key={category}
            onClick={() => onCategoryChange(category)}
            sx={{
              fontSize: "0.95rem",
              fontWeight: selectedCategory === category ? 700 : 500,
              cursor: "pointer",
              color: selectedCategory === category ? "primary.main" : "#333",
              textDecoration: selectedCategory === category ? "underline" : "none",
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
