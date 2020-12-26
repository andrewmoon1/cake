// given an array of strings, reverse the letters in place str.split(').reverse.join('')
// in place <- we modify the input, right?
// input will always be an array? 
// Using OOP, I would make a new object that on instantiation 
// calls a reverse method that takes the last item in the array 
// and shifts it to the front n (array length) number of times
// Array.toString().split(',').reverse().join(''); would not work because it returns a new array

class Reverse {
  constructor(inputArray) {
    this.reverse(inputArray);
  }

  reverse(inputArray) {
    let characterToReverse = 0;
    while (characterToReverse < inputArray.length - 1) {
      characterToReverse += 1;
      inputArray.unshift(inputArray.splice(characterToReverse, 1)[0])
    }
  }
}
const happy = ['h', 'a', 'p', 'p', 'y'];
new Reverse(happy);
console.log(happy, 'HAPPY');
