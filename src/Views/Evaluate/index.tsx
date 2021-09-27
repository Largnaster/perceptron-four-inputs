import React, { useRef, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import clsx from "clsx";
import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    forms: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      alignItems: "center",
    },
    margin: {
      margin: 10,
    },
    withoutLabel: {
      margin: 3,
    },
    textField: {
      width: "25ch",
    },
    typo: {
      paddingTop: "2em",
    },
  })
);

export default function Evaluate() {
  // Cracion de estilos
  const classes = useStyles();

  //   Captura de datos en la comprobacion
  const xoneRef = useRef<HTMLInputElement>(null);
  const xtwoRef = useRef<HTMLInputElement>(null);

  //   variable para almacenar el resultado
  const [result, setResult] = useState(0);

  return (
    <Container className={classes.forms}>
      <FormControl
        className={clsx(
          classes.margin,
          classes.withoutLabel,
          classes.textField
        )}
      >
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="xone-field"
          label="X1"
          inputRef={xoneRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">X1</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="xtwo-field"
          label="X2"
          inputRef={xtwoRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">X2</InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </FormControl>
      <Button
        variant="contained"
        // onClick={(e) => getCalc(e)}
        color="primary"
      >
        Run
      </Button>
      <Typography className={classes.typo}>Y = {result}</Typography>
    </Container>
  );
}
