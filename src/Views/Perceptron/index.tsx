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

export default function Perceptron() {
  // Cracion de estilos
  const classes = useStyles();

  //   Funcion para obtener los datos de entrada
  const getInputData: GetInputs = (i: Inputs) => {
    const inputs: number[] = [
      i.error,
      i.factor,
      i.w1,
      i.w2,
      i.w3,
      i.w4,
      i.iteraciones,
    ];
    setInputData(inputs);
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
        <Evaluate />
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
                console.log(item);
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
