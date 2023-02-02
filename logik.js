let board = [
    ['x', '', ''],
    ['', '', ''],
    ['', '', ''],
];
// debugger;
let ank1
let map = {}

id = 0
for (let i = 0; i < board.length; i++) {


    let row = board[i];


    for (let j = 0; j < row.length; j++) {
        if (row[j] === 'x') {
            map[id] = j
            id++
        } else {
            id++
            map[id] = ''
        }

    }
}

let cel = Object.entries(map).filter(val => val[1] !== '')



console.log(cel)





















// debugger;
// let index
// let map = {}
// let id = 1
// let horizonakan = ''
// for (let i = 0; i < input.length; i++) {
//     if (!(input[i].includes('o'))) {
//         index = input[i].includes('x') ? `կորդինատը ${input[i].indexOf('x')}` : `x չկա`
//     }
//     horizonakan = `variant կա ${i} տողում`
//     map[id] = `${horizonakan} ${index}`
//     id++
// }


// console.log(map)











// let input = [
//     ['x', '', ''],
//     ['x', '', ''],
//     ['', '', ''],
// ];




// let variantHorizonakan = 'horizonakan'
// let variantUxahayac = 'uxahayac'
// let variantAnkyunagicLeftRigth = 'ankyunagicLeftRigth'
// let variantAnkyunagicRigthLeft = 'ankyunagicRigthLeft'
// let sum = 0
// let map = {};
// function large(board) {
//     let id = 1;
//     for (let i = 0; i < board.length; i++) {
//         let row = board[i];
//         for (let j = 0; j < row.length; j++) {
//             if (row[j] === 'x') {
//                 row[j] = ''
//                 horizonakan = mtovisize(board, i, j, id);
//                 map[id] = horizonakan === 3 ? `${variantHorizonakan}  կա` : `${variantHorizonakan}  չկա`
//                 id++
//                 row[j] = ''
//                 uxahayac = mtovisize1(board, i, j, id);
//                 map[id] = uxahayac === 3 ? `${variantUxahayac}  կա` : `${variantUxahayac}  չկա`
//                 id++;
//                 row[j] = ''
//                 ankyunagicLeftRigth = mtovisize2(board, i, j, id);
//                 map[id] = ankyunagicLeftRigth === 3 ? `${variantAnkyunagicLeftRigth}  կա` : `${variantAnkyunagicLeftRigth}  չկա`
//                 id++;
//                 row[j] = ''
//                 ankyunagicRigthLeft = mtovisize3(board, i, j, id);
//                 map[id] = ankyunagicRigthLeft === 3 ? `${variantAnkyunagicRigthLeft}  կա` : `${variantAnkyunagicRigthLeft}  չկա`
//                 id++;

//             }
//         }

//     }
//     return board
// }
// function mtovisize(board, i, j, id) {
//     if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== '') {
//         return 0;
//     }
//     board[i][j] = id
//     return 1 + mtovisize(board, i, j - 1, id) +
//         mtovisize(board, i, j - 2, id) +
//         mtovisize(board, i, j + 1, id) +
//         mtovisize(board, i, j + 2, id)
// }

// function mtovisize1(board, i, j, id) {
//     if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== '') {
//         return 0;
//     }
//     board[i][j] = id
//     return 1 + mtovisize1(board, i - 1, j, id) +
//         mtovisize1(board, i - 2, j, id) +
//         mtovisize1(board, i + 1, j, id) +
//         mtovisize1(board, i + 2, j, id)
// }

// function mtovisize2(board, i, j, id) {
//     if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== '') {
//         return 0;
//     }
//     board[i][j] = id
//     return 1 + mtovisize2(board, i - 1, j - 1, id) +
//         mtovisize2(board, i - 2, j - 2, id) +
//         mtovisize2(board, i + 1, j + 1, id) +
//         mtovisize2(board, i + 2, j + 1, id)
// }
// function mtovisize3(board, i, j, id) {
//     if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== '') {
//         return 0;
//     }
//     board[i][j] = id
//     return 1 + mtovisize3(board, i - 1, j + 1, id) +
//         mtovisize3(board, i - 2, j + 2, id) +
//         mtovisize3(board, i + 1, j - 1, id) +
//         mtovisize3(board, i + 2, j - 2, id)
// }

// large(input)

// console.log(map)
































// const start = document.querySelector('.start')
// const pleyer = document.querySelector('.calcPleyer1')
// const comp = document.querySelector('.calcPleyer2')
// const tikTak = document.querySelector('.tikTak')
// const div = document.querySelectorAll('.a')
// const arr = Object.values(div)
// const calcPleyer = document.querySelector('.calcPleyer')
// let calc1 = 0
// const calcCpu = document.querySelector('.calcCpu')
// let calc2 = 0
// let newArray = [...arr]
// let bgX = 'url(img/555.png)'
// let bgO = 'url(img/987.jpg)'



// tikTak.onclick = function () {
//     if (start.style.opacity === '0') {
//         open()
//     }
// }

// start.onclick = function () {
//     noStart()
// }

// let globa = []

// let logik = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
// ]

// let lasStep = {}

// // Խաղի սկիզբ

// function noStart() {
//     if (start.style.opacity === '1') {
//         debugger;
//         update(arr)
//     }
//     start.style.opacity = '0'
//     start.style.cursor = 'default'
// }

// let ardyunq
// let count = 0
// let blblbl
// function open() {
//     let j
//     if (arr.includes(event.target) && count % 2 === 0) {
//         if (!event.target.style.backgroundImage) {
//             j = arr.indexOf(event.target)
//             arr[j].style.backgroundImage = bgX
//             newArray[j] = bgX
//             for (let i in logik) {
//                 if (logik[i].includes(j)) {
//                     logik[i][logik[i].indexOf(j)] = 'x'
//                     lasStep.x = j
//                     lasStep.y = +i
//                     blblbl = j
//                 }
//             }
//             count++
//             gameRule(newArray)
//             if (start.style.opacity === '0') {
//                 cpu()
//             }
//         }
//     }

// }


// let z
// let e = {}
// function cpu() {
//     for (let i in arr) {
//         if (arr[i].style.backgroundImage === '' && count % 2 === 1) {
//             arr[i].style.backgroundImage = bgO
//             newArray[i] = bgO
//             for (let j in logik) {
//                 if (logik[j].includes(+i)) {
//                     z = logik[j][logik[j].indexOf(+i)]
//                     logik[j][logik[j].indexOf(+i)] = 'o'
//                     e.x = +j
//                     e.y = i
//                     lasStep.x = i
//                     lasStep.y = +j
//                     blblbl = i
//                 }
//             }
//             count--
//         }

//     }
//     setTimeout(function () {
//         gameRule(newArray)
//     }, 50)    //Այստեղ եթե ժամանակը մեծացնում եմ հաշվի մեջ սխալ է լինում
// }


// function update(arr) {
//     tikTak.onclick = function () {
//         open()
//     }
//     for (let i in arr) {
//         arr[i].style.backgroundImage = ''
//     }
//     if (lasStep.x === 0 || lasStep.x === 3 || lasStep.x === 6) {
//         lasStep.x = 0
//     }
//     if (lasStep.x === 1 || lasStep.x === 4 || lasStep.x === 7) {
//         lasStep.x = 1
//     }
//     if (lasStep.x === 2 || lasStep.x === 5 || lasStep.x === 8) {
//         lasStep.x = 2
//     }

//     logik[lasStep.y][lasStep.x] = blblbl


//     if (globa.length === 0 && start.style.opacity === '1' && ardyunq === 'YOU WON') {
//         globa.push(logik)
//     } else if ((ardyunq === 'YOU WON' && globa.length !== 0)) {
//         let t
//         for (let i in globa) {
//             if (globa[i].join() === logik.join()) {        //same մեթոդով չստացվավ մոտս
//                 t = 1
//             }
//         }
//         if (t !== 1) {
//             globa.push(logik)
//         }
//     }
//     console.log(globa)
//     console.log(lasStep
//     )

//     logik = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8]
//     ]
//     newArray = [...arr]
//     count = 0
// }







// // // // Խաղի կանոններ

// function gameRule(arr) {
//     if ((newArray[0] === newArray[1] && newArray[2] === newArray[1]) || (newArray[0] === newArray[4] && newArray[8] === newArray[0])) {
//         newArray[0] === bgX ? wonPleyer() : wonCpu()
//     }
//     if ((newArray[3] === newArray[4] && newArray[3] === newArray[5]) || (newArray[0] === newArray[3] && newArray[6] === newArray[0])) {
//         newArray[3] === bgX ? wonPleyer() : wonCpu()
//     }
//     if ((newArray[6] === newArray[7] && newArray[8] === newArray[6]) || (newArray[1] === newArray[4] && newArray[7] === newArray[1])) {
//         newArray[7] === bgX ? wonPleyer() : wonCpu()
//     }
//     if ((newArray[2] === newArray[5] && newArray[8] === newArray[2]) || (newArray[2] === newArray[4] && newArray[6] === newArray[2])) {
//         newArray[2] === bgX ? wonPleyer() : wonCpu()
//     }

//     // Draw

//     if (newArray.every(val => val.length > 15)) {
//         draw()
//     }
// }

// function wonPleyer() {
//     calc1 += 1
//     calcPleyer.innerHTML = calc1
//     start.style.opacity = '1'
//     start.style.cursor = 'pointer'
//     start.style.backgroundColor = 'red'
//     start.style.fontSize = '32px'
//     start.innerHTML = 'YOU WON'
//     ardyunq = 'YOU WON'
//     tikTak.onclick = 0
//     changText()
// }

// function wonCpu() {
//     calc2 += 1
//     calcCpu.innerHTML = calc2
//     start.style.opacity = '1'
//     start.style.cursor = 'pointer'
//     start.style.backgroundColor = 'red'
//     start.style.fontSize = '32px'
//     start.innerHTML = 'YOU LOST'
//     ardyunq = 'YOU LOST'
//     tikTak.onclick = 0
//     changText()
// }

// function draw() {
//     start.style.opacity = '1'
//     start.style.cursor = 'pointer'
//     start.style.backgroundColor = 'red'
//     start.style.fontSize = '32px'
//     start.innerHTML = 'DRAW'
//     ardyunq = 'YOU LOST'
//     changText()
// }

// function changText() {
//     start.style.backgroundColor = 'green'
//     start.innerHTML = 'PLAY AGEIN'
// }