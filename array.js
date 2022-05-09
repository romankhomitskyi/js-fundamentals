function createArray() {
    return {
      length: 0,
      push(value) {
        this[this.length++] = value;
      },
      pop() {
        --this.length;
        const lastValue = this[this.length]
        delete this[this.length];
        return lastValue
      }
    };
  }

  const myArray = createArray();

  myArray.push(11);
  console.log(myArray);// myArray contains {0: 11}
  myArray.push(12);
  console.log(myArray); // => {0: 11, 1: 12}

  console.log(myArray.length === 2); // => returns 2

  console.log(myArray.pop() === 12); // => returns 12
  console.log(myArray.length === 1); // => returns 1
