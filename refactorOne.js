const hasTargetSum = (arr, target) => {
    const results = []
    const numsIHaveAlreadySeen = []
  
    for (let i = 0; i < arr.length; i++) { // O(n)
      const current = arr[i]
      const numIWant = target - current
  
      if (numsIHaveAlreadySeen.includes(numIWant)) { // O(n)
        results.push([current, numIWant])
      }
  
      numsIHaveAlreadySeen.push(current)
    }
  
    return results
}