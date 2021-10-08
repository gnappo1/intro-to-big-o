const hasTargetSum = (arr, target) => {
    const results = []
    const numsIHaveAlreadySeen = {}
  
    for (let i = 0; i < arr.length; i++) { // O(n)
      const current = arr[i]
      const numIWant = target - current
  
      if (numsIHaveAlreadySeen[numIWant]) { // O(1)
        results.push([current, numIWant])
      }
  
      numsIHaveAlreadySeen[current] = true
      console.log(numsIHaveAlreadySeen); // helps students visualize what is happening
    }
  
    return results
  }