import { prompt, rl } from "../../helpers/prompt.helper.js";
import { WeightedAverageUsecase } from '../../core/usecases/weighted-average.usecase.js';
import assert from 'assert';


export const runWeightedAverageCalculator = async (expected) => {
    //Entrada de dados
    const inputNotes = await prompt("\nInforme as notas (Ex:  8,7,6): ");
    const inputWeights = await prompt("Informe as notas (Ex: 0.3, 0.4, 0.3): ");
  
    // Resultado
  
    const notesArray = inputNotes.trim().split(",").map(parseFloat);
    const weightsArray = inputWeights.trim().split(",").map(parseFloat);
  
    const weightedAverage = new WeightedAverageUsecase(notesArray, weightsArray);
  
    const result = weightedAverage.calculate();
  
    try {
      assert.deepStrictEqual(result, expected);
      console.log(`Passou! A média ponderada é ${result}`);
      rl.close();
    } catch (error) {
      console.log(error);
    }
  };