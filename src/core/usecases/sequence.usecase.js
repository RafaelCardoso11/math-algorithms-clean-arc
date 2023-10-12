export class SequenceUseCase {
  constructor(sequence) {
    this.sequence = sequence;
  }

  check(sequence, correctSequence) {
    const correction = sequence.reduce(
      (acc, currentValue, currentIndex) => {
        const isPositionCorrect =
          correctSequence[currentIndex] === currentValue;

        if (isPositionCorrect) {
          acc.correct++;
        } else if (sequence.includes(currentValue)) {
          acc.incorrect++;
        }
        return acc;
      },
      {
        correct: 0,
        incorrect: 0,
      }
    );

    return correction
  }
  generateRandom() {
    return this.sequence.map(() => {
      const randomIndex = Math.floor(Math.random() * this.sequence.length);
      return this.sequence[randomIndex];
    });
  }
}
