// Part 1

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Remaining elements to search: ${arr.length - i}`);
  
      const elem = arr[i];
      if (elem === target) {
        return target;
      }
    }
    return false;
};

// Part 2
const average = array => array.reduce((total, num) => total + num, 0) / array.length
const containsAvg = (array) => {
  const avg = average(array) // O(n + 1)
  return array.includes(avg) // O(n)
}

// O(n)