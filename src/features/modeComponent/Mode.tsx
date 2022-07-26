import React from "react";
import { Mode } from "../enums/enums";
import { $enum } from "ts-enum-util";
import { capitalizeFirstLetter } from "../../app/utils/utils";
// Hooks
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
// Components
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
// Store
import { changeMode, selectMode } from "../stores/modeSlice";
// Styles
import styles from "./Mode.module.scss";

const renderModeEnum = (mode: string, dispatch: AppDispatch) => {
  const enumFilteredValues = $enum(Mode)
    .getValues()
    .filter((modeItem) => modeItem !== mode);
  return enumFilteredValues.map((mode) => {
    return (
      <Fab
        color="primary"
        onClick={() => dispatch(changeMode(mode))}
        variant="extended"
        key={`${mode}${Math.random()}`}
      >
        <Typography variant="button" display="block" sx={{ mb: 0 }}>
          {mode}
        </Typography>
      </Fab>
    );
  });
};

const ModePicker: React.FC = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        className={styles.header}
      >
        Select your game mode
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Current mode: {capitalizeFirstLetter(mode)}
      </Typography>
      <Box className={styles.modePicker} sx={{ "& > :not(style)": { m: 1 } }}>
        {renderModeEnum(mode, dispatch)}
      </Box>
    </Box>
  );
};

// in each component include basic greeting : Play, Edit, home
// change the component according to the mode
export default ModePicker;
