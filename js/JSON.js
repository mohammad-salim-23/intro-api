/*2 things here I learned
1. JSON.stringify(): any object or array convert to string for this method
2.JSON.parse(): any string convert to object for this methoed

*/
const user = {id:1,name:"Gorib ka Amir",jpb:'actress'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
// console.log(typeof user);
// console.log(typeof stringified);
const shop ={
    owner:"Alia",
    address:{
        street: 'JahangirNagar University',
        city:'ranbir',
        country:'BD',
    },
    products: ['laptop','mic','monitor', 'keyboard'],
    revenew: 45000,
    isOpen:true,
    isClosed:false,
}
console.log(shop);
const JSONstring = JSON.stringify(shop);
console.log(JSONstring);
const JSONobject = JSON.parse(JSONstring);
console.log(JSONstring);
console.log(JSONobject)