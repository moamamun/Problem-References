// function power(base,exp) {
//     if(exp === 0) return 1
//     return base * power(base,exp-1)
// }

// console.log(power(2,4))

// function factorial(num){
//     if(num === 1) return 1
//     return num * factorial(num - 1) 
//  }

//  console.log(factorial(7))

// function productOfArray(arr) {
//     if(arr.length === 0) return 1
//     return arr[0] * productOfArray(arr.slice(1))
// }  

// console.log(productOfArray([1,2,3]))

// function recursiveRange(num){
//     if(num === 1) return 1
//     return num + recursiveRange(num - 1)
//  }
 
//  console.log(recursiveRange(6))

// function fib(num){
//     // add whatever parameters you deem necessary - good luck!  
//     let newArr = [1,1]
//     let i = 0
//     let j = 1

//     function helper(input) {
//         if(newArr.length === num) return 1

//         newArr.push(newArr[i] + newArr[j])
//         j+=1
//         i+=1

//         helper(input)
//     }

//     helper(num)
//     return newArr[num - 1]
//   }

//   console.log(fib(4))

// function reverse(str){
//     if(str.length < 2) return str
//     return reverse(str.slice(1)) + str[0]
// }
  
  
// console.log(reverse('awesome')) // 'emosewa'


// function isPalindrome(str){
//    console.log(str.slice(1,-1))
//   }

// console.log(isPalindrome('gaaasdasdag'))
