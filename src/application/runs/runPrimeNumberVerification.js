import { prompt, rl } from "../../helpers/prompt.helper.js";
import assert from 'assert';
import { PrimeNumberUsecase } from '../../core/usecases/prime-number.usecase.js';


export const runPrimeNumberVerification = async (expected) => {
    //Entrada de dados
    const inputNumber = await prompt("\nInforme o número primo: ");
  
    // Resultado
    const prime = new PrimeNumberUsecase();
  
    const isPrime = prime.isValid(inputNumber);
  
    try {
      assert.deepStrictEqual(isPrime, expected, "Not is prime number");
      console.log(`CORRETO! O número ${inputNumber} é primo`);
      rl.close();
    } catch (error) {
      console.log(error);
      rl.close();
    }
  };