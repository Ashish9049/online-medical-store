import Navbar from "./Navbar";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 1 }}>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default MainLayout;