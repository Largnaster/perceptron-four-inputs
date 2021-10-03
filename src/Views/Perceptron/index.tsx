import React, { useState } from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import Training from "../Training";
import Evaluate from "../Evaluate";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  })
);

const theme = createTheme();

const truthTable: number[][] = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [0, 1, 0, 1, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

export default function Perceptron() {
  // Cracion de estilos
  const classes = useStyles();

  //   Funcion para obtener los datos de entrada
  const getInputData: GetInputs = (i: Inputs) => {
    calcY(i.error, i.factor, i.w1, i.w2, i.w3, i.w4, i.iteraciones);
  };

  // Funcion para calcular y
  const calcY = (
    error: number,
    factor: number,
    w1: number,
    w2: number,
    w3: number,
    w4: number,
    iter: number
  ) => {
    iter++;
    if (iter > 2000) {
      alert("se superó el límite de 2000");
      return;
    }
    console.log(
      "Cantidad de iteraciones: ",iter
    );
    const calcInput: number[] = [error, factor, w1, w2, w3, w4, iter];
    setInputData(calcInput);

    truthTable.forEach((row) => {
      let yValue =
        row[0] * w1 + row[1] * w2 + row[2] * w3 + row[3] * w4 - error;
      console.log(yValue);
      if (yValue >= 0) {
        yValue = 1;
      } else {
        yValue = 0;
      }

      if (yValue !== row[4]) {
        // Recalcular el error
        const errorVariation = row[4] - yValue;
        // Recalcular el factor de aprendizaje
        const newError = error + -(factor * errorVariation);
        // Ajustar los pesos
        const newW1 = w1 + row[0] * errorVariation * factor;
        const newW2 = w2 + row[1] * errorVariation * factor;
        const newW3 = w3 + row[2] * errorVariation * factor;
        const newW4 = w4 + row[3] * errorVariation * factor;

        return calcY(newError, factor, newW1, newW2, newW3, newW4, iter);
      }
    });
  };

  // Se maneja el cambio de los datos de entrada
  const [inputData, setInputData] = useState([0, 0, 0, 0, 0, 0, 0]);

  // funciones para el entrenemiento y posterior validacion de datos

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.top}>
        {/* Parte del entrenamiento del perceptron */}
        <Training updateData={getInputData} />
        {/* Esta es la parte de las pruebas */}
        <Evaluate inputData={inputData} />
      </Container>
      {/* Esta es la parte donde se muestran los resultados */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Error</TableCell>
              <TableCell>Factor de aprendizaje</TableCell>
              <TableCell>Weight 1</TableCell>
              <TableCell>Weight 2</TableCell>
              <TableCell>Weight 3</TableCell>
              <TableCell>Weight 4</TableCell>
              <TableCell>Iteraciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {inputData.map((item: number) => {
                return (
                  <TableCell align="right" key={+new Date() + Math.random()}>
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
