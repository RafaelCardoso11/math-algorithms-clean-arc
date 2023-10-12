import { prompt, rl } from "../../helpers/prompt.helper.js";
import assert from 'assert';
import { SequenceUseCase } from '../../core/usecases/sequence.usecase.js';

export const runColorGame = async (colors, expected) => {
  const QUESTION_LENGHT_ATTEMP = `\nNúmero de tentativas: `;
  const lenghtAttemp = await prompt(QUESTION_LENGHT_ATTEMP);

  // Resultado
  const sequenceUseCase = new SequenceUseCase(colors);
  const randomColors = sequenceUseCase.generateRandom();

  const playGame = async () => {
    for (let attempt = 1; attempt <= lenghtAttemp; attempt++) {
      const question = `Tentativa ${attempt} (ex: RGBY): `;
      const outputAttemp = await prompt(question);

      const sequence = outputAttemp.trim().toUpperCase().split("");

      const checkRandomColors = sequenceUseCase.check(sequence, randomColors);

      console.log(
        `Dicas: ${checkRandomColors.correct}B ${checkRandomColors.incorrect}W\n`
      );

      try {
        assert.deepStrictEqual(checkRandomColors, expected);
        console.log(
          `Parabéns! Você adivinhou a sequência correta: ${randomColors}`
        );
        break;
      } catch (error) {
        if (Number(attempt) === Number(lenghtAttemp)) {
          console.log(
            `Infelizmente você não acertou a sequência correta: ${randomColors}`
          );
        }
      }
    }
  };

  playGame().then(() => {
    rl.close();
  });
};
