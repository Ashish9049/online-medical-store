import { Grid, Paper, Typography } from "@mui/material";

const features = [
  { title: "100% Genuine", desc: "Verified & certified medicines" },
  { title: "Fast Delivery", desc: "Quick & safe doorstep delivery" },
  { title: "Secure Payment", desc: "100% secure transactions" },
];

const WhyChooseUs = () => {
  return (
    <Grid container spacing={3} sx={{ p: 2, height:"185px" }}>
      {features.map((item) => (
        <Grid item xs={12} md={4} key={item.title}>
          <Paper sx={{ p: 3, textAlign: "center" }} elevation={3}>
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography color="text.secondary" mt={1}>
              {item.desc}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhyChooseUs;
