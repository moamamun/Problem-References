//pattern involves ceating a window which can either be an array or number
// from one poistion to another
// usefull for keeping track of subsets.

//Q: Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The funcation should calc the max sum of n consecutive elemenets in the array.

function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
  
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

