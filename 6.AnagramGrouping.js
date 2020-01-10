const Hash = require('./HashMap')

function main(){
let StrDu = new Hash
function anagramG(array){
let uniqueKeys = []
for (word of array){
 let keyword = word.split("").sort().join(""); // Alphabetical order/ key code (common)
// e.g. aest 
 try {
 let temp = StrDu.get(keyword) // get(aest) -> 1st time - undefined. 2nd time -> value 
 temp.push(word) // push teas onto value 
 StrDu.set(keyword,temp) // Set aest with the new pushed array 
 }catch{
  uniqueKeys.push(keyword) // push aest into uniqueKeys
  StrDu.set(keyword,[word]) // set this in hashmap with value of the word - [east]
 }
}
// for item of key - meaning aest, acrs, acer 
const result = []
for (item of uniqueKeys){
 result.push(StrDu.get(item)) // push the array [] value from the hashmap into result array
}
return result
}
let input  = ['east','cars', 'acre', 'arcs', 'teas', 'eats', 'race']
console.log(anagramG(input))
}
main()