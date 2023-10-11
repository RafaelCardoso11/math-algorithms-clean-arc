import { NoteEntity } from "../entities/NoteEntity.js";

export class WeightedAverageUsecase {
  notes = [];
  weights = [];
  constructor(notes, weights) {
    this.notes = notes;
    this.weights = weights;
  }
  calculate() {
    if (this.#isLengthEqual()) {
      const averageSum = this.notes.reduce(
        this.#calculateTotalWeight.bind(this),
        0
      );
      const weightedSum = this.weights.reduce((acc, weight) => acc + weight, 0);

      const weightedAverage = averageSum / weightedSum;

      const roundedResult = Math.floor(weightedAverage * 10) / 10;
      return roundedResult;
    }
  }

  #isLengthEqual() {
    return this.notes.length === this.weights.length;
  }
  #calculateTotalWeight(acc, note, index) {
    return (
      acc + new NoteEntity(note, this.weights[index]).calculateWeightedValue()
    );
  }
}
