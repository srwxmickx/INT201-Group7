// Group7 fill() & find()

// fill เป็นการเติมค่าลงไป
// fill(value)
// fill(value, start)
// fill(value, start, end)
// value : ค่าที่จะเติม
// start : เริ่มที่ index ไหน
// end : จบที่ไหน
// ถ้าไม่เติมตัวจบระบบจะเติมค่าลงไปต่อเรื่อยๆ
console.log();

let arr = ['Alice', 'Bob', 'Carol', 'Ted'];
arr.fill('Mick');
console.log(arr); //[ 'Mick', 'Mick', 'Mick', 'Mick' ]

let arr1 = ['Alice', 'Bob', 'Carol', 'Ted'];
arr1.fill('Mick', 1);
console.log(arr1); //[ 'Alice', 'Mick', 'Mick', 'Mick' ]

let arr2 = ['Alice', 'Bob', 'Carol', 'Ted'];
arr2.fill('Mick', 1,2);
console.log(arr2);  //[ 'Alice', 'Mick', 'Carol', 'Ted' ]

console.log();
//-----------------------------------------------------------------------------------------------------------------------
//find เป็นการหา element ที่เราต้องการ
//find((element) => { ... } )
//find((element, index) => { ... } )
//find((element, index, array) => { ... } )
//element : element ปัจจุบันในอาร์เรย์
//index : index ของค่าตัวนั้นๆ
//array : array ที่เราเอามาหา

let arr3= [{ name: 'Alice', Age: 20 }, { name: 'Bob', Age: 20 },{ name: 'Carol', Age: 20 }, { name: 'Ted', Age: 21 }];
console.log('/////////////////////////////// find ///////////////////////////////')
console.log();

let find = arr3.find((value) => 'Bob' === value.name)  
console.log(find)  //{ name: 'Bob', Age: 20 }
console.log();

let find1 = arr3.find((value) => 'Mick' === value.name)  
console.log(find1) //undefined
//ถ้าหาไม่เจอจะ return เป็น undefined

console.log();
console.log('/////////////////////////////// find index ///////////////////////////////')
console.log();

// findIndex หา index ของ data ใน array ที่ตรงเงื่อนไขที่เราต้องการ 
// คล้ายๆกับ find แต่ return index แทน
//findIndex((element) => { ... } )
//findIndex((element, index) => { ... } )
//findIndex((element, index, array) => { ... } )

let index = arr3.findIndex((value) => 'Bob' === value.name)
console.log(index); //1
