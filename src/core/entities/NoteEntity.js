export class NoteEntity {
  constructor(value, weight) {
    this.value = value;
    this.weight = weight;
  }

  calculateWeightedValue() {
    return this.value * this.weight;
  }
}
