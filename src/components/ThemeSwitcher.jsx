import React, { FC, useContext, useState } from "react";
import { Grid, IconButton, useTheme } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorModeContext } from "../theme";

const ThemeSwitcher = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Grid onClick={colorMode.toggleColorMode}>
      <IconButton>
        {theme.palette.mode === "dark" ? (
          <DarkMode sx={{ color: "white" }} />
        ) : (
          <LightMode sx={{ color: "black" }} />
        )}
      </IconButton>
    </Grid>
  );
};

export default ThemeSwitcher;
