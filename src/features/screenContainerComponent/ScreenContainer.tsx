import React from "react";
// Components
import ModePicker from "../modeComponent/Mode";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface IScreenContainer {
  screenName: string;
  children?: React.ReactNode;
}

const ScreenContainer: React.FC<IScreenContainer> = ({
  screenName,
  children,
}) => {
  return (
    <Box>
      <Paper
        elevation={1}
        sx={{
          padding: ".5rem",
          backgroundColor: "primary.light",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography color="primary.dark" variant="h4">
          {screenName}
        </Typography>
      </Paper>
      {children}
      <ModePicker />
    </Box>
  );
};

export default ScreenContainer;
