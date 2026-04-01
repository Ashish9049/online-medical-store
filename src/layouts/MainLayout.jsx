import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 1 }}>
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  );
};

export default MainLayout;