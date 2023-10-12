import assert from "assert";

import { PrimeNumberUsecase } from "./src/core/usecases/prime-number.usecase.js";
import { WeightedAverageUsecase } from "./src/core/usecases/weighted-average.usecase.js";
import { SequenceUseCase } from "./src/core/usecases/sequence.usecase.js";

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

// 3. O Jogo das Cores
{ 

  // Resultado esperado
  const expected = {
    correct: 4,
    incorrect: 0,
  };

  //Entrada de dados
  const colors = ["R", "G", "B", "Y"];
  
  const inputAttempt = ["B", "R", "G", "Y"];

  // Resultado
  const sequenceUseCase = new SequenceUseCase(colors);
  const randomColors = sequenceUseCase.generateRandom();

  const checkRandomColors = sequenceUseCase.check(inputAttempt, randomColors);

  
  console.log(`Attempt: ${inputAttempt}`);
  console.log(
    `Feedback: ${checkRandomColors.correct}B ${checkRandomColors.incorrect}W`
  );

  assert.deepStrictEqual(
    checkRandomColors,
    expected,
    `Your sequence was ${inputAttempt}. The correct sequence is ${colors} `
  );
}
