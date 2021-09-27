/// <reference types="react-scripts" />
interface Inputs {
    error:number;
    factor:number;
    w1:number;
    w2:number;
    w3:number;
    w4:number;
    iteraciones:number;
}

type GetInputs = (i: Inputs) => array;