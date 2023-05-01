//problem-1: prime number

let array=[2,5,7,9,11,4,56,89,90]
let count=-0;
for(let i=0; i<array.length; i++){
if(array[i]%i==0){
count++;
}
}
if(count==2){
console.log("Prime number");
}
else{
console.log("not a prime number");
}


//problem-2:Palindrome
let string="naman";
let bag="";
for(let i=string.length-1; i>=0; i--){
     bag=bag+string[i];
}
if(bag===string){
console.log("Palindrome");
}
else{
console.log("Not a Palindrome");
}