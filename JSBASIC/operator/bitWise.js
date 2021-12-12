//Bitwise operator
// 1=00000001
//2 =00000010
// 3=00000011

// console.log(1 | 2);
// console.log(1 & 2);


const readPermission=4;
const writePermission=2;
const executePermission=1;

let myPermission=0;

//myPermission=readPermission | writePermission | executePermission;
myPermission= writePermission | executePermission;

let message=0;
message= (myPermission & readPermission) ? 'yes' :'no';

console.log(message);
