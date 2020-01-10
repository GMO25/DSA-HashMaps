const Hash = require('./HashMap')

function main(){

const lotr = new Hash

lotr.set("Hobbit","Bilbo")

lotr.set("Wizard","Gandalf")
lotr.set("Human","Aragon")
lotr.set("Hobbit","Frodo")
lotr.set("Elf","Legolas")
lotr.set("Maiar","The Necromancer")
lotr.set("Maiar","Sauron")
lotr.set("Ringbearer","Gollum")
lotr.set("Ladyoflight","Galadriel")
lotr.set("Halfelven","Arwen")
lotr.set("Ent", "Treebeard")

console.log(lotr.get("Maiar"))
console.log(lotr.get('Hobbit'))
console.log(lotr)

}
main()
// Have I hashed all the items I was asked to?
// Yes but there is no open adressing taking place 
// What are the values of Maiar and Hobbit? Is there a discrepancy? Explain your answer
// Sauron and Frodo, yes there should be two more values for each - the other values overwrited the old values at the keys



// What is the capacity of your hash table? Explain your answer
// 24, capacity - 1 call of resizing (8 * 3) executed when over half of capacity is reached  

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new Hash();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new Hash();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo()
// 2. As they are the same Keys being attached to map1 and map2, its simply the last value that overwrit it.
// In case of map1 str2 is same as str1 so 10 is replaced by 20 - map1.get(str1) = 20
// In case of map2 str3 is same as str4 so 20 is replaced by 10 - map2.get(str2) = 10 

