// A pattern uses objects or sets to collect values/frequencies of values 
// often avoids the need for nested loops O(n^2) with arrays/stings


//Q: if the ar2 has squared values for each corresponding element of ar1 return true
// example [1,2,3], [1,4,9] {keeep in mind order doesn't matter also, must have same length}
const same = (ar1,ar2) => {
    if(ar1.length !== ar2.length) {
        return false
    }
    f1 = {}
    f2 = {}
    for(let val of ar1) {
        f1[val] = (f1[val] || 0) + 1
    }
    for(let val of ar2) {
        f2[val] = (f2[val] || 0) + 1
    }
    for(let key in f1) {
        if(!(key**2 in f2)) {
            return false
        }
        if(f2[key**2] !== f1[key]) {
            return false
        }
    }
    return true
}

//console.log(same([1,2,3],[1,4,9]))
//console.log(same([1,2,3,3],[2,4,9]))

//Same concept as first but now we determine if the both two strings are anagrams of eachother. 
//return false or true example ['',''] = true or ('aaz','zza') = false

const validAnagram = (s1,s2) => {
    if(s1.length !== s2.length) return false
    let book = {}
    for(let val of s1) {
        book[val] ? book[val] +=1 : book[val] =1
    }
    for(let char of s2) {
        if(!(char in book)) {
            return false
        }
        book[char]--
    }
    return true 
}

console.log(validAnagram('abcasbs','bcaaesb'))