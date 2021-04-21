let a = [2,3,4,5,6,7,10];
let i;
function arr(b){
    let large = a[0];
    let small = a[0];
    for(i=1;i<b.length;i++){
    if(b[i]>large){
        large = b[i];
    }else if(b[i]<small){
        small = b[i];
    }
} 
 console.log(large);
 console.log(small);
}arr(a);
