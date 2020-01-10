const Hash = require('./HashMap')

function main(){
let StrDu = new Hash
 function palindrome(string){
 let result = "";
  
  for(letter of string){
    try {
     StrDu.set(letter, StrDu.get(letter) + 1)
    } catch {
      StrDu.set(letter,1)
      result = result + letter 
    }
  }
  let count = 0
  for(letter of result){
   if(StrDu.get(letter) % 2 === 1){
    count ++
   }
 
   }
  if (count === 0 || count === 1){
   return true
  } else {
   return false 
  }
 

 }
 let string = 'racecar'
console.log(palindrome(string))
}
main()