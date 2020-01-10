const Hash = require('./HashMap')

function main(){
 

  // 4. Hash - Method 
 let StrDu = new Hash()
 function deleteDup(string){
  result = ""
  for(letter of string){
    try {
      StrDu.get(letter)
    }catch {
      StrDu.set(letter,0)
      result = result + letter 
    }
  }
  
 return result
 

 }
 let string = 'google'
console.log(deleteDup(string))

// 4. Object - method
 function remove_duplicates(arr) {
  var obj = {};

  var ret_arr = [];
  for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
  }
  for (var key in obj) {

      ret_arr.push(key);
  }
  return ret_arr
}
//console.log(remove_duplicates(string))

// 4. Array method 
function rDuplicates(str) {
let arr =[]
let result = []
for (let i=0; i<str.length;i++){
 arr.push(str[i])
}
// google 
let counter = 1
 for (let i=0; i<str.length; i++){
 

  for (let j=1;j<=arr.length;j++){
  //console.log(arr,j,arr[j])
   if(arr[0] === arr[j]){
    
    arr.splice(j,1)
    j -- 
   } 
  
  }
 
  if(arr[0]){
   result.push(arr[0])
   arr.splice(0,1)
  }
  
 }
 return result
}
let str = 'googleggg'
//console.log(rDuplicates(str))

}

main()