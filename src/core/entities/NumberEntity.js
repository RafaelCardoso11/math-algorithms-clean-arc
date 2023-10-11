export class NumberEntity {
  constructor(value) {
    this.value = value;
  }

  isPrime(specialPrimes) {
    if (this.#isLessThanTwo(this.value)) {
      return false;
    }

    if (this.#isSpecialPrime(this.value, specialPrimes)) {
      return true;
    }

    if (this.#isDivisibleByTwo(this.value)) {
      return false;
    }

    if (this.#isDivisibleByAny(this.value)) {
      return false;
    }

    return true;
  }

  #isLessThanTwo(number) {
    return number < 2;
  }

  #isDivisibleByTwo(number) {
    return number % 2 === 0;
  }

  #isSpecialPrime(number, specialPrimes) {
    return specialPrimes.includes(number);
  }

  #isDivisibleByAny(number) {
    const sqrt = Math.sqrt(number);

    for (let i = 3; i <= sqrt; i += 2) {
      if (number % i === 0) {
        return true;
      }
    }

    return false;
  }
}
