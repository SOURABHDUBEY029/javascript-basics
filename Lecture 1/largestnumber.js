let a=10;
let b=6;
let c=12;
if(a>b){
    if(b>c){
        console.log(a);
    }else if(b<c&&a<c){
        console.log(c);
    }
}else{
    console.log(b);
}