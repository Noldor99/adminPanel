import React from "react";
import { Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import { NotFoundBlock } from "./components/NotFoundBlock";
import BoardPage from "./page/Board/Board";
import Calendar from "./page/Calendar/Calendar";

import DataGrid from "./page/DataGrid/DataGrid";
import { useMode, ColorModeContext } from "./theme";
import { ThemeProvider } from "@mui/material";
import AdminPanel from "./page/AdminPanel/AdminPanel";
const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="adminPanel" element={<Layouts />}>
              <Route index element={<AdminPanel />} />
              <Route path="board" element={<BoardPage />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="users" element={<DataGrid />} />
            </Route>
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
