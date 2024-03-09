
//else if 
let x = 0;

// if(){
//     ...
// }else if() {
//     ...
// }
// else{
//     ...
// }

if( x > 0){
    console.log("positive number")
}
else if ( x === 0) {
    console.log("This value is zero")
}
else{
    console.log("negative number")
}


//comparing of three values 


let a = 231;
let b = 45;
let c =9;

if(a>b && a>c){
    console.log("A is greater then b and c")
}
else if(b>a && b>c){
    console.log("B is greater then  A and c")
}
else{
    console.log("C is greater then A and B")
}


//switch 
let choice = 18;
switch (choice){
        
        case 1 : console.log("Monday")
        break;
        case 2 : console.log("TuesDay")
        break;
        case 3 : console.log("Wednesday")
        break;
        case 4 : console.log("Thursday")
        break;
        case 5 : console.log("Friday")
        break;
        case 6 : console.log("Saturday")
        break;
        case 7 : console.log("Sunday")
        break;
        
        default : console.log("Please check value");
        break;
}