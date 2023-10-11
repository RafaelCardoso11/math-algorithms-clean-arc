import { NumberEntity } from "../entities/NumberEntity.js";

export class PrimeNumberUsecase {
  specialPrimes = [];

  constructor(specialPrimes = [2]) {
    this.specialPrimes = specialPrimes;
  }

  isValid(number) {
    const numberEntity = new NumberEntity(number);
    return numberEntity.isPrime(this.specialPrimes);
  }
}
