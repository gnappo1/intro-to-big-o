const hasTargetSum = (arr, target) => {
    const results = []
  
    for (let i = 0; i < arr.length; i++) { // O(n^2)
      const current = arr[i]
  
      for (let j =  i + 1; j < arr.length; j++) {
        const next = arr[j]
  
        if (current + next === target) {
          results.push([current, next])
        }
      }
    }
  
    return results
}