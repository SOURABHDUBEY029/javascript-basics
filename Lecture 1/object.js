// let object = obj{};
// console.log(object);

let tony = {
    name:"Tony",
    lastName:"Stark",
    friends:['Steve','Bruce','Peter'],
    age:50,
    isAvenger:true,
    abc:undefined,
    address:{
        state:"New York",
        city:"Long Island",

    },
    saysHi: function fn(){
        console.log('Iron man says hello');
        return "part of the journey is end";
    }

}
//console.log(tony);

//**2 ways to access values from object**//
//1
// console.log(tony.friends[1]);
// console.log(tony.address);
// console.log(tony.age);
// console.log(tony.address.city);
// console.log(tony.friends[1]);
 //console.log(tony.saysHi());

 //2
// console.log(tony['friends']);
// console.log(tony['address']);
// console.log(tony['age']);
// console.log(tony['address']['city']);
// console.log(tony['friends'][1]);
// console.log(tony['saysHi']());

let karr = Object.keys(tony)
console.log(karr);
for(let k in tony){
    console.log(tony[k])
}

// for(let i=0;i<karr.length;i++){
//     console.log(tony[karr[i]]);
// }