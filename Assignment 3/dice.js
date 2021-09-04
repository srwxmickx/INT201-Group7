let player1 = {}; //ประกาศตัวแปร player1 เป็น object สำหรับเก็บข้อมูล ชื่อ,ค่าเลขที่ได้ในแต่ละครั้ง,ผลของเกมแต่ละรอบ
let player2 = {}; //ประกาศตัวแปร player2 เป็น object สำหรับเก็บข้อมูล ชื่อ,ค่าเลขที่ได้ในแต่ละครั้ง,ผลของเกมแต่ละรอบ
let playerResult = { player1, player2 } //playerResult เป็น Object เก็บข้อมูลของผู้เล่นทั้งสองคน
let gameRound; //ตัวแปรสำหรับบันทึกตาในแต่ละรอบที่จะเล่น
let player1win = 0; //ตัวแปรสำหรับบันทึกอัตราชนะของผู้เล่นที่ 1 โดยทุกการชนะจะบวกขึ้นไป 1 แต้ม เริ่มจาก 0
let player2win = 0; //ตัวแปรสำหรับบันทึกอัตราชนะของผู้เล่นที่ 2 โดยทุกการชนะจะบวกขึ้นไป 1 แต้ม เริ่มจาก 0

function randomDice() {
    return Math.floor((Math.random() * 6) + 1);
} // function randomDice() สำหรับการสุ่มเลขลูกเต๋า 6 หมายเลขด้วยคำสั่ง Math.random

function setUpPlayer(name1, name2) {
    player1 = { name: name1, dicesResult: [], gameResult: [] };
    player2 = { name: name2, dicesResult: [], gameResult: [] };
    playerResult = { player1, player2 }
    return playerResult;
}
// function setUpPlayer(name1,name2) สำหรับการป้อนชื่อผู้เล่นทั้ง 2 คน เมื่อป้อนเสร็จโปรแกรมจะคืนค่า ผู้เล่นทั้งสองออกมาผ่านตัวแปร playerResult
// ภายใน Object player1 และ player2 นอกจากมี name ที่เก็บชื่อผู้เล่นแต่ละคนแล้ว จะมี array ของ dicesResult เก็บค่าเลขที่ได้ในแต่ละครั้ง และ gameResult เก็บผลของเกมแต่ละรอบ

function setRound(round) {
    gameRound = round;
    return gameRound;
}
// function setRound(round) จะเป็นการส่งจำนวนตาที่จะเล่นเข้ามา ผ่านพารามิเตอร์ ชื่อ round และนำค่านั้นส่งต่อไปที่ gameRound

//function startGame() เป็นฟังก์ชันที่จะเริ่มให้เกมดำเนินการ
function startGame() {
    for (let i = 0; i < gameRound; i++) {
        player1.dicesResult.push(randomDice());
        player2.dicesResult.push(randomDice());
    }
    //ภายใน loop นี้จะเป็นการสุ่มตัวเลขลูกเต๋าลงไปใน array dicesResult ภายใน Object player1 และ player2
    //ใช้คำสั่ง push ในการเพิ่มเลขลูกเต๋าที่ได้เข้าไปใน array โดยคำสั่ง push จะเป็นการเพิ่มข้อมูลไปที่ตัวสุดท้ายของ array
    //loop จะทำงานจนกว่าจะทำงานตั้งแต่ 0 จนกว่าจะมีค่าน้อยกว่า gameRound

    for (let i = 0; i < gameRound; i++) {

        if (player1.dicesResult[i] < player2.dicesResult[i]) {
            player1.gameResult.push("LOSE");
            player2.gameResult.push("WIN");
            player2win = player2win + 1;
        } else if (player1.dicesResult[i] > player2.dicesResult[i]) {
            player1.gameResult.push("WIN");
            player2.gameResult.push("LOSE");
            player1win = player1win + 1;
        } else {
            player1.gameResult.push("DRAW");
            player2.gameResult.push("DRAW");
        }
    }
    //loop ข้างต้นจะเป็นการตรวจผล แพ้ ชนะ และ เสมอ
    //โดยที่จะตรวจสอบในแต่ละตำแหน่งของอาเรย์ dicesResult ภายใน Object player
    //โดยเงื่อนไขมีอยู่ว่า ถ้าแต้มของผู้เล่นแรก น้อยกว่าผู้เล่นที่สอง ผู้เล่นแรกจะมีผลเป็น LOSE ผู้เล่นสองมีผลเป็น WIN
    //ในเงื่อนไขนี้จะมี player2win update ค่า เพิ่มขึ้นทีละ 1 หาก ผู้เล่นที่สองมีผลเป็น WIN
    //โดยเงื่อนไขมีอยู่ว่า ถ้าแต้มของผู้เล่นแรก มากกว่าผู้เล่นที่สอง ผู้เล่นแรกจะมีผลเป็น WIN ผู้เล่นสองมีผลเป็น WIN
    //ในเงื่อนไขนี้จะมี player1win update ค่า เพิ่มขึ้นทีละ 1 หาก ผู้เล่นที่หนึ่งมีผลเป็น WIN
    //โดยเงื่อนไขมีอยู่ว่า ถ้าแต้มของผู้เล่นแรก เท่ากับผู้เล่นที่สอง ผู้เล่นแรกจะมีผลเป็น DRAW ผู้เล่นสองมีผลเป็น DRAW
    //โดย ผลของเกมแต่ละรอบ จะถูกบันทึกใน gameResult ภายใน Object player1 และ player2 ผ่านคำสั่ง push
    return playerResult
    //เมื่อจบการทำงานทุกส่วนเสร็จแล้ว โปรแกรมจะ return playerResult ออกมา
}

function whoWins() {
    if (player1win > player2win) {
        return player1.name + ' win!!';
    } else if (player2win > player1win) {
        return player2.name + ' win!!';
    } else {
        return player1.name + ' Draw ' + player2.name;
    }
}
//function whoWins() เป็นฟังก์ชันที่จะตรวจสอบว่า เมื่อเกมส์จบใครจะเป็นผู้ชนะ
//โดยเปรียบเทียบจาก player1win และ player2 win ถ้าตัวแปรตัวไหนมีค่ามากกว่า
//player นั้นจะเป็นผู้ชนะ และ return 'ชื่อผู้ชนะ win!!' ถ้าหารเสมอจะ return draw

//ทดสอบโปรแกรม
setUpPlayer('name1', 'name2')
setRound(14)
console.log(startGame())
console.log(whoWins())