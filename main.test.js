import assert from "assert";


import { PrimeNumberUsecase } from "./src/core/usecases/prime-number.usecase.js";
import { WeightedAverageUsecase } from "./src/core/usecases/weighted-average.usecase.js";


// 1. Verificação de Número Primo
{
  // Resultado esperado
  const expected = true;

  //Entrada de dados
  const inputNumber = 2;

  // Resultado
  const prime = new PrimeNumberUsecase();

  const isPrime = prime.isValid(inputNumber);

  assert.deepStrictEqual(isPrime, expected, "Not prime number");
}

//2. Calculadora de Média Ponderada
{
  // Resultado esperado
  const expected = 7;

  //Entrada de dados
  const inputNotes = [8, 7, 6];
  const inputWeights = [0.3, 0.4, 0.3];

  // Resultado
  const weightedAverage = new WeightedAverageUsecase(inputNotes, inputWeights);

  const result = weightedAverage.calculate();

  assert.deepStrictEqual(result, expected);
}
