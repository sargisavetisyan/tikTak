const start = document.querySelector('.start')
const namePleyer1 = document.querySelector('.calcPleyer1')
const namePleyer2 = document.querySelector('.calcPleyer2')
const pleyer1 = prompt(' pleyer1 enter your name')
const pleyer2 = prompt('pleyer2 enter your name')
namePleyer1.innerHTML = pleyer1
namePleyer2.innerHTML = pleyer2
const calcPleyer1 = document.querySelector('.calcPleyer1')
let calc1 = 0
const calcPleyer2 = document.querySelector('.calcPleyer2')
let calc2 = 0
const div = document.querySelectorAll('.a')
const arr = Object.values(div)
let pleyer
let count = 0
let bgX = 'url(img/555.png)'
let bgO = 'url(img/987.jpg)'

// Խաղը սկսողին է ընդգծում

let bgCount = 1
namePleyer1.style.backgroundColor = 'red'
function pleyerBg() {

    if (bgCount % 2 === 0) {
        namePleyer1.style.backgroundColor = 'red'
        namePleyer2.style.backgroundColor = ''
        bgCount++
    } else {
        namePleyer2.style.backgroundColor = 'red'
        namePleyer1.style.backgroundColor = ''
        bgCount++
    }

}

// Խաղի սկիզբ

start.addEventListener('click', function () {
    addEventListener('click', bgChangeImage)
    start.style.display = 'none'
})

// Հերթականությամբ ցուցադրում է X-Ը և O-ն

let newArray = arr.map(val => val)

function bgChangeImage(event) {
    let eve = event.target
    if (count % 2 === 0) {
        pleyer = bgX
    } else {
        pleyer = bgO
    }
    if (arr.includes(eve)) {
        if (count % 2 === 0 && !eve.style.backgroundImage) {
            arr[arr.indexOf(eve)].style.backgroundImage = pleyer
            newArray[arr.indexOf(eve)] = pleyer
            count++
        } else {
            if (!eve.style.backgroundImage) {
                arr[arr.indexOf(eve)].style.backgroundImage = pleyer
                newArray[arr.indexOf(eve)] = pleyer
                count--
            }
        }
    }
    gameRule(arr)
}

// // Խաղի կանոններ

function gameRule(arr) {

    // won pleyer 

    if (newArray[0] === newArray[1] && newArray[2] === newArray[1]) {
        let i = 0
        changePleyerCase(i)
    }
    if (newArray[3] === newArray[4] && newArray[3] === newArray[5]) {
        let i = 3
        changePleyerCase(i)
    }
    if (newArray[6] === newArray[7] && newArray[8] === newArray[6]) {
        let i = 6
        changePleyerCase(i)
    }
    if (newArray[0] === newArray[3] && newArray[6] === newArray[0]) {
        let i = 0
        changePleyerCase(i)
    }
    if (newArray[1] === newArray[4] && newArray[7] === newArray[1]) {
        let i = 1
        changePleyerCase(i)
    }
    if (newArray[2] === newArray[5] && newArray[8] === newArray[2]) {
        let i = 2
        changePleyerCase(i)
    }
    if (newArray[0] === newArray[4] && newArray[8] === newArray[0]) {
        let i = 0
        changePleyerCase(i)
    }
    if (newArray[2] === newArray[4] && newArray[6] === newArray[2]) {
        let i = 2
        changePleyerCase(i)
    }

    // Draw

    if (newArray.every(val => val.length > 15)) {
        draw()
    }
}

// Փոփոխում է կոճակի գույնը և թարմացնում փաղը

function changText() {
    if (start.innerHTML === `WON ${pleyer1}` || start.innerHTML === `WON ${pleyer2}` || start.innerHTML === 'DRAW') {
        start.addEventListener('mouseenter', function () {
            start.style.backgroundColor = 'green'
            start.style.fontSize = '24px'
            start.innerHTML = 'play again'
            start.addEventListener('click', function () {
                start.style.display = 'none'
                if (start.style.display === 'none') {
                    update(arr)
                }
            })
            start.addEventListener('mouseleave', function () {
                start.style.backgroundColor = 'red'
                start.style.fontSize = '32px'
                start.innerHTML = `won ${pleyer1}`
                start.addEventListener('click', function () {
                    start.style.display = 'none'
                    if (start.style.display === 'none') {
                        update(arr)
                    }
                })
            })
        })
    }
}

function changTextDraw() {
    if (start.innerHTML === `WON ${pleyer1}` || start.innerHTML === `WON ${pleyer2}` || start.innerHTML === 'DRAW') {
        start.addEventListener('mouseenter', function () {
            start.style.backgroundColor = 'green'
            start.style.fontSize = '24px'
            start.innerHTML = 'play again'
            start.addEventListener('click', function () {
                start.style.display = 'none'
                if (start.style.display === 'none') {
                    update(arr)
                }
            })
            start.addEventListener('mouseleave', function () {
                start.style.backgroundColor = 'red'
                start.style.fontSize = '32px'
                start.innerHTML = `DRAW`
                start.addEventListener('click', function () {
                    start.style.display = 'none'
                    if (start.style.display === 'none') {
                        update(arr)
                    }
                })
            })
        })
    }
}

// Խաղի արդյունք

function changePleyerCase(i) {
    if (newArray[i] === bgX && namePleyer1.style.backgroundColor === 'red') {
        wonPleyer1()
    }
    if (newArray[i] === bgX && namePleyer1.style.backgroundColor === '') {
        wonPleyer2()
    }
    if (newArray[i] === bgO && namePleyer1.style.backgroundColor === '') {
        wonPleyer1()
    }
    if (newArray[i] === bgO && namePleyer1.style.backgroundColor === 'red') {
        wonPleyer2()
    }
    newArray = arr.map(val => val)
    pleyerBg()
    removeEventListener('click', bgChangeImage)
}

function wonPleyer1() {
    calc1 += 1
    calcPleyer1.innerHTML = calc1
    start.style.display = 'flex'
    start.style.backgroundColor = 'red'
    start.style.fontSize = '32px'
    start.innerHTML = `WON ${pleyer1}`
    changText()
}

function wonPleyer2() {
    calc2 += 1
    calcPleyer2.innerHTML = calc2
    start.style.display = 'flex'
    start.style.backgroundColor = 'red'
    start.style.fontSize = '32px'
    start.innerHTML = `WON ${pleyer2}`
    changText()
}

function draw() {
    start.style.display = 'flex'
    start.style.backgroundColor = 'red'
    start.style.fontSize = '32px'
    start.innerHTML = 'DRAW'
    changTextDraw()
    newArray = arr.map(val => val)
    pleyerBg()
}

function update(arr) {
    for (let i in arr) {
        arr[i].style.backgroundImage = ''
    }
    count = 0
}