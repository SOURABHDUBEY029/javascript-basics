let a = [2,3,1,1,1,1,2,6,7,8,1,1,5];
function arr(b){
    let first = 0,last = 0,flag = 0;
    for(i=0;i<b.length;i++){
        if(b[i] == 1 && flag == 0){
         first = i, flag++;}
         if(b[i]==1){
             last = i;
         }}
         console.log("first position of 1 = ",first);
         console.log("last position of 1 = ",last);
}arr(a);