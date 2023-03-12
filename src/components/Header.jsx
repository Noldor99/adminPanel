import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { AppBar, Grid, Toolbar } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import MySearch from "./MySearch";
import { MenuOutlined } from "@mui/icons-material";
import { tokens } from "../theme";

const Header = (props) => {
  const { setIsOpen, isOpen, isNonMobile } = props;
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  return (
    <AppBar
      sx={{
        boxShadow: "none !important",
        background: `${color.accentMain}`,
      }}
      position="static"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sm={3} lg={3}>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <MenuOutlined onClick={() => setIsOpen(!isOpen)} />
              <Typography variant="h4">Welcome</Typography>
            </Box>
          </Grid>
          {isNonMobile && (
            <Grid
              display="flex"
              justifyContent="flex-end"
              gap="12px"
              item
              sm={9}
              lg={9}
            >
              <ThemeSwitcher />
              <MySearch
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
