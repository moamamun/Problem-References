//creating pointers or values that correspond to an index or 
//position and move towards the beginning, end or middle based on conditions
//good for space time complexity

//Q: func sumZero, an order paired and have return pair, which = 0

const sumZero = arr => {
    let i = 0
    let j = arr.length - 1
    while (i < j) {
      let sum  = arr[j] + arr[i]
      if(sum === 0) {
        return [[arr[j],arr[i]]]
      }
      else if(sum > 0) {
        j --
      } else {
        i ++
      }
    }
}

//console.log(sumZero([-7,-6,-3,3,4,5]))

//Q2 countUniqueValues meaning, if there's duplicates ignore and for each diff value counter +1
//accepts sorted arrays, and counts the unique values in the array. There can be negatice numbers in the array
//but it will always be sorted.

const countUniqueValues = arr => {
  if(!arr.length) {
    return 0
  }
  let i = 0
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

//O(n)

//console.log(countUniqueValues([1,1,1,1,1,2,3,4]))

