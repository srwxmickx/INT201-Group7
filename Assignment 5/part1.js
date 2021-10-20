
// closure function 
function getWord(words) {                           
// เก็บ array ตัวอักษรมาเก็บไว้เพื่อนำไป filter ตัวอักษรที่อยากให้แสดงออกมา
    function filterWord(filterdWord) {              
    // กรองตัวอักษรที่ตรงกับเงื่อนไขออกมาแสดง
        return words.filter((e) => {
            if (e.length == filterdWord.length) {   
            // ตรวจสอบเงื่อนไขว่าตัวอักษรใน array ที่เก็บมาตอนแรกมีความยาวเท่ากับตัวอักษรที่ได้รับค่ามา
                return e;                          
                // return ค่าตัวอักษรใน array ที่มีความยาวเท่ากับตัวอักษรที่เราได้รับค่ามาภายหลัง
            }
        })
    }

    return filterWord;                            
    //return function filterWord หากเรียก function เดิมซ้ำสอง

}



// let censorWord = getWord(['jajah', 'aom', 'arm', 'phop']);
// console.log(censorWord('jah')); //กรณีที่เป็น3ตัวอักษร
// console.log(censorWord('jajah')); //กรณีที่เป็น5ตัวอักษร
// console.log(censorWord('phop')); //กรณีที่เป็น4ตัวอักษร



// higher order function, rest parameter,default parameter 

let personArray = [];

function doSomethingArray(fn, num, ...rest) {
    //รับค่าparameterมา2ค่า fnคือfunctionที่ต้องการเรียกและตัวเลขหนึ่งตัว นอกเหนือจากนี้จะถือว่าเป็น rest parameter

    if (rest.length !== 0) {

        return `You can only add only one value, ${rest} can not be used. TRY AGAIN!!`;
        //หากมี rest parameter (ขนาดของrest ไม่เท่ากับ0 ให้return ตัวเลขออกมา พร้อมบอกว่าไม่สามารถดำเนินการได้)
    }

    return fn(num);
    //หากไม่มี rest parameter (ขนาดของrest ท่ากับ0 ให้return function fn และ num ในรูปแบบของ fn(num))
}

function addToLastIndex(num = 1) {
    //function addToLastIndex รับparameter num หากไม่มีการป้อนค่า num จะเท่ากับ 1 (default parameter)
    personArray.push(num);
    //เพิ่ม num เข้าไปในindexสุดท้ายของarray personArray
    return personArray;

}

function addToFirstIndex(num = 1) {
    //function addToFirstIndex รับparameter num หากไม่มีการป้อนค่า num จะเท่ากับ 1 (default parameter)
    personArray.unshift(num);
    //เพิ่ม num เข้าไปในindexแรก(ตำแหน่งที่ 0)ของarray personArray
    return personArray;
}


function removeFormLastIndex() {
    //function removeFormLastIndex ไม่มีการรับparameter 
    personArray.pop();
    //ลบข้อมูลในตำแหน่งสุดท้ายของarray personArray
    return personArray;
}


function removeToFirstIndex() {
    //function removeFormLastIndex ไม่มีการรับparameter 

    personArray.shift();

    //ลบข้อมูลในindexแรก(ตำแหน่งที่ 0)ของarray personArray
    return personArray;

}

// console.log(doSomethingArray(addToFirstIndex,5,6,7)) // กรณีที่มี rest parameter
// console.log(doSomethingArray(addToFirstIndex,5)) 
// console.log(doSomethingArray(addToFirstIndex,6))
// console.log(doSomethingArray(addToFirstIndex)) // กรณีที่ไม่ส่งparameter default parameter=1
// console.log(doSomethingArray(removeFormLastIndex))

export { getWord }
//export function getWord() ออกไปให้ไฟล์อื่น import
