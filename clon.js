
const start = document.querySelector('.start')
// const pley = document.querySelector('.pley')
// const a1 = document.querySelector('.pley-pleyer')
// const a2 = document.querySelector('.pley-cpu')

const pleyer = document.querySelector('.calcPleyer1')
const comp = document.querySelector('.calcPleyer2')
const tikTak = document.querySelector('.tikTak')
const div = document.querySelectorAll('.a')
const arr = Object.values(div)
let k = 0
const calcPleyer = document.querySelector('.calcPleyer')
let calc1 = 0
const calcCpu = document.querySelector('.calcCpu')
let calc2 = 0

tikTak.onclick = function () {
    open()
}

start.onclick = function () {
    noStart()
}

let globa = [

]

let logik = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

let lasStep = {}

let newArray = [...arr]

let bgX = 'url(img/555.png)'
let bgO = 'url(img/987.jpg)'

// Խաղի սկիզբ

function noStart() {
    if (start.style.opacity === '1') {
        update(arr)
    }
    start.style.opacity = '0'
    start.style.cursor = 'default'
    // pley.style.opacity = '1'
}

let ardyunq
let count
// let bgPleyer
// let bgCpu

// a2.addEventListener('click', trr)
// a1.addEventListener('click', trr)

// Խաղը սկսողին է ընդգծում

// function trr() {
//     if (event.target === a1) {
//         pley.innerHTML = 'PLEYER'
//         count = 0
//         // Ըստ խաղացողի X-ը վորոշվում է
//         bgPleyer = bgX
//         bgCpu = bgO
//     }
//     if (event.target === a2) {
//         pley.innerHTML = 'CPU'
//         count = 1
//         // Ըստ խաղացողի X-ը վորոշվում է
//         bgPleyer = bgO
//         bgCpu = bgX
//         cpu(k)
//     }
// }

let blblbl
function open() {
    let j
    if (arr.includes(event.target) /* && count % 2 === 0*/) {
        if (!event.target.style.backgroundImage) {
            j = arr.indexOf(event.target)
            arr[j].style.backgroundImage = bgPleyer
            newArray[j] = bgPleyer
            for (let i in logik) {
                if (logik[i].includes(j)) {
                    if (bgPleyer === bgX) {
                        logik[i][logik[i].indexOf(j)] = 'x'
                        lasStep.x = j
                        lasStep.y = +i
                        blblbl = j
                    }
                    //  else {
                    //     logik[i][logik[i].indexOf(j)] = 'o'
                    //     lasStep.x = j
                    //     lasStep.y = +i
                    //     blblbl = j
                    // }
                }
            }
            // count = 1

            gameRule(newArray)
            if (start.style.opacity === '0') {

                cpu(k)
            }
        }
    }

}


let z
let e = {}
function cpu(k) {

    while (k <= 8) {
        if (arr[k].style.backgroundImage === '' && count % 2 === 1) {
            arr[k].style.backgroundImage = bgCpu
            newArray[k] = bgCpu
            for (let j in logik) {
                if (logik[j].includes(+k)) {
                    if (bgCpu === bgX) {

                        z = logik[j][logik[j].indexOf(+k)]
                        logik[j][logik[j].indexOf(+k)] = 'x'

                        e.x = +j
                        e.y = k
                        lasStep.x = k
                        lasStep.y = +j
                        blblbl = k
                    } else {

                        z = logik[j][logik[j].indexOf(+k)]
                        logik[j][logik[j].indexOf(+k)] = 'o'

                        e.x = +j
                        e.y = k

                        lasStep.x = k
                        lasStep.y = +j
                        blblbl = k
                    }
                }
                for (let t in globa) {

                    // debugger;
                    if (globa[t].join() === logik.join()) {
                        arr[k].style.backgroundImage = ''
                        newArray[k] = arr[k]
                        logik[e.x][e.y] = z
                        count++
                        cpu(k++)
                    }
                }
            }

            count--
        }
        k++

    }

    setTimeout(function () {
        gameRule(newArray)
    }, 50)    //Այստեղ եթե ժամանակը մեծացնում եմ հաշվի մեջ սխալ է լինում
}




// // // Խաղի կանոններ


function gameRule(arr) {
    if ((newArray[0] === newArray[1] && newArray[2] === newArray[1]) || (newArray[0] === newArray[4] && newArray[8] === newArray[0])) {
        newArray[0] === bgX ? wonPleyer() : wonCpu()
    }
    if ((newArray[3] === newArray[4] && newArray[3] === newArray[5]) || (newArray[0] === newArray[3] && newArray[6] === newArray[0])) {
        newArray[3] === bgX ? wonPleyer() : wonCpu()
    }
    if ((newArray[6] === newArray[7] && newArray[8] === newArray[6]) || (newArray[1] === newArray[4] && newArray[7] === newArray[1])) {
        newArray[7] === bgX ? wonPleyer() : wonCpu()
    }
    if ((newArray[2] === newArray[5] && newArray[8] === newArray[2]) || (newArray[2] === newArray[4] && newArray[6] === newArray[2])) {
        newArray[2] === bgX ? wonPleyer() : wonCpu()
    }

    // Draw

    if (newArray.every(val => val.length > 15)) {
        draw()
    }
}


function wonPleyer() {
    calc1 += 1
    calcPleyer.innerHTML = calc1
    start.style.opacity = '1'
    start.style.cursor = 'pointer'
    start.style.backgroundColor = 'red'
    start.style.fontSize = '32px'
    start.innerHTML = 'YOU WON'
    ardyunq = 'YOU WON'
    tikTak.onclick = 0
    changText()
}

function wonCpu() {
    calc2 += 1
    calcCpu.innerHTML = calc2
    start.style.opacity = '1'
    start.style.cursor = 'pointer'
    start.style.backgroundColor = 'red'
    start.style.fontSize = '32px'
    start.innerHTML = 'YOU LOST'
    ardyunq = 'YOU LOST'
    tikTak.onclick = 0
    changText()
}

function draw() {
    start.style.opacity = '1'
    start.style.cursor = 'pointer'
    start.style.backgroundColor = 'red'
    start.style.fontSize = '32px'
    start.innerHTML = 'DRAW'
    ardyunq = 'YOU LOST'
    changText()
}

function changText() {
    if (start.innerHTML === `YOU WON` || start.innerHTML === `YOU LOST` || start.innerHTML === 'DRAW') {
        start.style.backgroundColor = 'green'
        start.innerHTML = 'PLAY AGEIN'
    }
}


function update(arr) {
    tikTak.onclick = function () {
        open()
    }
    for (let i in arr) {
        arr[i].style.backgroundImage = ''
    }
    //x8  y2
    if (lasStep.x === 0 || lasStep.x === 3 || lasStep.x === 6) {
        lasStep.x = 0
    }
    if (lasStep.x === 1 || lasStep.x === 4 || lasStep.x === 7) {
        lasStep.x = 1
    }
    if (lasStep.x === 2 || lasStep.x === 5 || lasStep.x === 8) {
        lasStep.x = 2
    }

    logik[lasStep.y][lasStep.x] = blblbl


    if (globa.length === 0 && start.style.opacity === '1' && ardyunq === 'YOU WON') {
        globa.push(logik)
    } else if ((ardyunq === 'YOU WON' && globa.length !== 0)) {
        let t
        for (let i in globa) {
            if (globa[i].join() === logik.join()) {        //same մեթոդով չստացվավ մոտս
                t = 1
            }
        }
        if (t !== 1) {
            globa.push(logik)
        }
    }
    console.log(globa)


    logik = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]



    newArray = [...arr]
    if (pley.innerHTML === 'PLEYER') {
        pley.innerHTML = 'CPU'
        bgCpu = bgX
        bgPleyer = bgO
        count = 1
        cpu(k)
    } else {
        pley.innerHTML = 'PLEYER'
        bgCpu = bgO
        bgPleyer = bgX
        count = 0
    }
}

