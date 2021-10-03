import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import clsx from "clsx";
import React, { useRef } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

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
  })
);

const trainingData: Inputs = {
  error: 0.5,
  factor: 0.2,
  w1: 1.1,
  w2: 1.3,
  w3: 1.4,
  w4: 1.5,
  iteraciones: 0,
};

type ClildProps = {
  updateData?: (val: Inputs) => void;
};

const Training: React.FC<ClildProps> = ({ updateData: onClick = () => {} }) => {
  // Cracion de estilos
  const classes = useStyles();

  //   El uso de referencias para capturar los datos en entrenamiento
  const errorRef = useRef<HTMLInputElement>(null);
  const factorRef = useRef<HTMLInputElement>(null);
  const woneRef = useRef<HTMLInputElement>(null);
  const wtwoRef = useRef<HTMLInputElement>(null);
  const wthreeRef = useRef<HTMLInputElement>(null);
  const wfourRef = useRef<HTMLInputElement>(null);

  const handleClick = (training: Inputs) => {
    const newTrainingData:Inputs = {
      error:+errorRef.current!.value,
      factor:+factorRef.current!.value,
      w1:+woneRef.current!.value,
      w2:+wtwoRef.current!.value,
      w3:+wthreeRef.current!.value,
      w4:+wfourRef.current!.value,
      iteraciones:0
    }
    onClick(newTrainingData);
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
          id="error-field"
          label="Error"
          inputRef={errorRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">&#216;</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="factor-field"
          label="Factor"
          inputRef={factorRef}
          InputProps={{
            startAdornment: <InputAdornment position="start">E</InputAdornment>,
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="wone-field"
          label="Weight 1"
          inputRef={woneRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">W1</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="wtwo-field"
          label="Weight 2"
          inputRef={wtwoRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">W2</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="wthree-field"
          label="Weight 3"
          inputRef={wthreeRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">W3</InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          className={clsx(classes.margin, classes.textField)}
          id="wfour-field"
          label="Weight 4"
          inputRef={wfourRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">W4</InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => handleClick(trainingData)}
        color="primary"
      >
        Run
      </Button>
    </Container>
  );
};

export default Training;
