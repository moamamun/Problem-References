function twosums(arr, target) {
    let want = {}
   for(let i = 0; i < arr.length; i++) {
       if(target - arr[i] in want) {
           return [want[target- arr[i]],i]
       }
       else {
        want[arr[i]] = i
       }
   }
}

console.log(twosums([2,8,12,15], 20))
