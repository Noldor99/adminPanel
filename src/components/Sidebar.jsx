import { Dashboard } from "@mui/icons-material";
import { CalendarToday, TableChart, ListAlt } from "@mui/icons-material";
import { ChevronLeftOutlined, LogoutOutlined } from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import { Box, Drawer, Typography, useTheme } from "@mui/material";
import logoimg from "../assets/logo.png";
import { IconButton } from "@mui/material";
import { tokens } from "../theme";
const Sidebar = (props) => {
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;

  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  return (
    <Box>
      {isOpen && (
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: "white",
              background: `${color.accentMain}`,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ width: "35px", mx: "auto", pt: 2 }}>
            <img style={{ maxWidth: "100%" }} src={logoimg} alt="logo" />
          </Box>
          {!isNonMobile && (
            <IconButton
              sx={{ color: `${color.accentMain}` }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronLeftOutlined />
            </IconButton>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              flex: 1,
            }}
          >
            <NavLink to="" title={"AdminPanel"}>
              <Dashboard sx={{ fontSize: 30, color: "white" }} />
            </NavLink>

            <NavLink to="calendar" title="Calendar">
              <CalendarToday sx={{ fontSize: 30, color: "white" }} />
            </NavLink>

            <NavLink to="board" title="Trello Board">
              <ListAlt sx={{ fontSize: 30, color: "white" }} />
            </NavLink>

            <NavLink to="users" title="Users">
              <TableChart sx={{ fontSize: 30, color: "white" }} />
            </NavLink>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
