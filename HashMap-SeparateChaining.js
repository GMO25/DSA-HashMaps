
class _Node {
    constructor(value,next,key){
        this.value = value;
        this.next = next;
       }
}
class LinkedList {
    constructor(){
     this.head = null;
    }
   
    insertBefore(node,item){
     
     let nodeAfter = this.find(node) //Boomer
     let currNode = this.head; // Apollo
     
      while(currNode){ // ApolloNode.next == Boomer
        
      if(currNode.next == nodeAfter){ // if Apollo.next == Boomer - Yes
       currNode.next = new _Node(item,nodeAfter) // Apollo.next = newNode 
       currNode = currNode.next
       }
       currNode = currNode.next // node 1,2,3,4,5
     }
     
    }
    insertAfter(node,item){
     let nodeBefore = this.find(node) 
     
     nodeBefore.next = new _Node(item,nodeBefore.next)
    
     let currNode = this.find(item) // hotdog.key // pizza
     let nodeAfter = this.find(item).next // husker.key  // hotdog
     while(currNode.key < nodeAfter){
      currNode = currNode.next
      }
   
    
    
   
   
    }
    insertAt(position,item){
     let currNode = this.head 
     let count = 0
     while (currNode){
       count ++ 
      currNode = currNode.next
     
     if (count == position - 1){
      currNode.next = new _Node(item,currNode.next)
      currNode = currNode.next
     }
    }
   
   }
   
   
   
    insertFirst(item){
     this.head = new _Node(item,this.head);
    }
    insertLast(item,key){
     if(this.head === null){
      this.insertFirst(item,key);
     } else {
      let tempNode = this.head;
      while(tempNode.next !== null){
       tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item,null)
     }
    }
    find(item){
     let currNode = this.head;
     if(!this.head){
      return null;
     }
     while(currNode.value !== item){
      if(currNode.next === null){
       return null;
      }
      else {
       currNode = currNode.next;
      }
     }
     return currNode;
    }
    remove(item){
     if(!this.head){
      return null;
     }
     if (this.head.value === item){
      this.head = this.head.next;
      return
     }
     let currNode = this.head;
     let previousNode = this.head;
     while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
     }
     if(currNode === null){
      console.log('Item not found')
      return;
     }
     previousNode.next = currNode.next;
    }
   }
   
   
class HashMapSep {
 constructor(initialCapacity=8) {
     this.length = 0;
     this._hashTable = [];
     this._capacity = initialCapacity;
     this._deleted = 0;
     this.MAX_LOAD_RATIO = 0.5;
     this.SIZE_RATIO = 3;
     
 }
 set(key,value){
  const loadRatio = (this.length + this._deleted + 1) / this._capacity;
  if (loadRatio > this.MAX_LOAD_RATIO) {
      this._resize(this._capacity * this.SIZE_RATIO);
  }
  //Find the slot where this key should be in
  let index = this._findSlot(key);

  let hashList = new _Node

  if(!this._hashTable[index]){
      this.length++;
     
      
      this._hashTable[index] = {
          key,
          value:value,
          DELETED:false,
      }
  } else {

        this._hashTable[index] = {
        key,
        value: new _Node(value,this.get(key)),
        DELETED:false,
    }
  }

  

 
}
 get(key) {
     
     const index = this._findSlot(key);
     if (this._hashTable[index] === undefined) {
         throw new Error('Key error');
     }
     return this._hashTable[index].value;
 }



 delete(key) {
     const index = this._findSlot(key);
     const slot = this._hashTable[index];
     if (slot === undefined) {
         throw new Error('Key error');
     }
     slot.DELETED = true;
     this.length--;
     this._deleted++;
 }

 _findSlot(key) {
  const hash = HashMapSep._hashString(key);
  const start = hash % this._capacity;

  for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
          return index;
      }
  }
}

 _resize(size) {
     const oldSlots = this._hashTable;
     this._capacity = size;
     // Reset the length - it will get rebuilt as you add the items back
     this.length = 0;
     this._deleted = 0;
     this._hashTable = [];

     for (const slot of oldSlots) {
         if (slot !== undefined && !slot.DELETED) {
          if(slot.next){
          //console.log(slot.next)
           this.set(slot.key,slot.next)
          }
             this.set(slot.key, slot.value);
         }
     }
 }

 static _hashString(string) {
     let hash = 5381;
     for (let i = 0; i < string.length; i++) {
         //Bitwise left shift with 5 0s - this would be similar to
         //hash*31, 31 being the decent prime number
         //but bit shifting is a faster way to do this
         //tradeoff is understandability
         hash = (hash << 5) + hash + string.charCodeAt(i);
         //converting hash to a 32 bit integer
         hash = hash & hash;
     }
     //making sure hash is unsigned - meaning non-negtive number. 
     return hash >>> 0;
 }
}

module.exports = HashMapSep


function main (){

 const hash = new HashMapSep
hash.set("Hobbit","Bilbo")
hash.set("Hobbit","Frodo")
hash.set("Halfelven","Arwen")
hash.set("Hobbit","Pippin")

//console.log(hash.get("Ent"))
console.log(hash)
console.log(hash.get("Hobbit"))

}
main()
