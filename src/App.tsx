import React from "react";
// Hooks
import { useAppSelector } from "./app/hooks";
// Types
import { Mode } from "./features/enums/enums";
// Components
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import HomeScreen from "./features/homeScreenComponent/HomeScreen";
import PlayScreen from "./features/playScreenComponent/PlayScreen";
import EditScreen from "./features/editScreenComponent/EditScreen";
// Store
import { selectMode } from "./features/stores/modeSlice";

const renderScreen = (screen: Mode) => {
  switch (screen) {
    case Mode.HOME:
      return <HomeScreen />;
    case Mode.PLAY:
      return <PlayScreen />;
    case Mode.EDIT:
      return <EditScreen />;
    default:
      return;
  }
};

const App = () => {
  const mode = useAppSelector(selectMode);

  return (
    <div>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{
            padding: ".5rem",
            backgroundColor: "secondary.light",
            mt: 1,
            mb: 1,
          }}
        >
          <Typography color="primary.dark" variant="h4">
            Quiz App
          </Typography>
        </Paper>
        {renderScreen(mode)}
      </Box>
    </div>
  );
};

export default App;
