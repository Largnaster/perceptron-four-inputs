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

interface InputProps {
  inputData: number[];
}

const Evaluate: React.FC<InputProps> = ({ inputData }) => {
  // Cracion de estilos
  const classes = useStyles();

  //   Captura de datos en la comprobacion
  const xoneRef = useRef<HTMLInputElement>(null);
  const xtwoRef = useRef<HTMLInputElement>(null);
  const xthreeRef = useRef<HTMLInputElement>(null);
  const xfourRef = useRef<HTMLInputElement>(null);

  //   variable para almacenar el resultado
  const [result, setResult] = useState(0);

  const getCalc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const calculation: number =
      (+xoneRef.current!.value * inputData[2]) +
        (+xtwoRef.current!.value * inputData[3]) +
        (+xthreeRef.current!.value * inputData[4]) +
        (+xfourRef.current!.value * inputData[5]) -
        inputData[0]
    ;
    console.log(`
      (${+xoneRef.current!.value} * ${inputData[2]}) +
        (${+xtwoRef.current!.value} * ${inputData[3]}) +
        (${+xthreeRef.current!.value} * ${inputData[4]}) +
        (${+xfourRef.current!.value} * ${inputData[5]}) -
        ${inputData[0]}
     = ${calculation}`)
    setResult(calculation);
  };

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
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="xthree-field"
          label="X3"
          inputRef={xthreeRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">X3</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="xfour-field"
          label="X4"
          inputRef={xfourRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">X4</InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </FormControl>
      <Button variant="contained" onClick={(e) => getCalc(e)} color="primary">
        Run
      </Button>
      <Typography className={classes.typo}>Y = {result}</Typography>
    </Container>
  );
};

export default Evaluate;
