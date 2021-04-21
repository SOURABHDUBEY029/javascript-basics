//slice used to take multiple user inputs //

//console.log(process.argv.slice(2));

//  function f1(num){
     
//      for(let i=0;i<num.length;i++)
//      console.log(parseInt(num[i])+2);
     
    
//  }f1(process.argv.slice(2))

// slice is also used to print or store values from the given index no.// 
// let arr = [1,2,3,4,5,6];
// let sub = arr.slice(1);
// console.log(sub);

//printing last two letters from the given string//
let sarr = ['I','am','Iron','Man'];
let lstr = sarr[sarr.length-1];
let ltd = lstr.slice(1);
console.log(ltd);