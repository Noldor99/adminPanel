import React, { FC, useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FullScreen from "./UI/FullScreen/FullScreen";

const LayoutComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const isNonMobile = useMediaQuery("(min-width:760px)");

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      justifyContent="space-between"
      width="100%"
      height="100vh"
    >
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="60px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isNonMobile={isNonMobile}
        />
        <FullScreen></FullScreen>
        <Box sx={{ px: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutComponent;
