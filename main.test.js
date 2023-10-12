import { runColorGame } from "./src/application/runs/runColorGame.js";
import { runPrimeNumberVerification } from "./src/application/runs/runPrimeNumberVerification.js";
import { runWeightedAverageCalculator } from "./src/application/runs/runWeightedAverageCalculator.js";
import { prompt, rl } from "./src/helpers/prompt.helper.js";

const main = async () => {
  console.log("Escolha uma opção:");
  console.log("1. Verificação de Número Primo");
  console.log("2. Calculadora de Média Ponderada");
  console.log("3. O Jogo das Cores");
  console.log("0. Sair");

  const choice = await prompt("Digite o número da opção desejada: ");

  switch (choice) {
    case "1":
      runPrimeNumberVerification(true);
      break;
    case "2":
      runWeightedAverageCalculator(7);
      break;
    case "3":
      runColorGame(["R", "G", "B", "Y"], {
        correct: 4,
        incorrect: 0,
      });
      break;
    case "0":
      rl.close();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
      main();
  }
};
main();
