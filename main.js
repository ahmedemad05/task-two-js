alert("Hi (;")

function pow( num1 ,  num2){
    let res=1;
    for (let i = 1 ; i <= num2 ; i++){
        res*=num1;
    }
    return res;
}
 
let x = prompt("Enter total numbers that you want to get their power ya a5oeaa");
let y, z ,arr=[];
// (: عامل فكرتين للكود بس غالبا الي عامل عليه كومنت هو الغلط فحدد مين الفكرة الصح يا مانجر يا نمبر ون 
// for (let i = 0; i < x; i++) {
//     y=prompt("Enter number "+(i+1));
//     z = prompt("Enter your power for number "+(i+1))
//      arr[i] = pow(y,z);
//      console.log("the power "+ z+" of number "+y+" is "+arr[i]);
// }
alert("first enter your num then enter the power")
for (let i = 0; i < x*2; i++) {
     y=prompt();
     arr[i] = y;
}
for (let i = 0; i < arr.length/2; i++) {
    console.log("the power "+ arr[i*2+1]+" of number "+arr[i*2]+" is "+pow(arr[i*2],arr[i*2+1]));
}