const data0 = document.querySelectorAll('.data0>div')
const data1 = document.querySelectorAll('.data1>div')
const dashboard = document.querySelector('.dashboard')
const start = document.querySelector('.start>button')
const pause = document.querySelector('.pause>button')
const lap = document.querySelector('.lap>button')
const restart = document.querySelector('.restart>button')
lap.disabled = true
pause.disabled = true
restart.disabled = true
const libery = []

let PushToLib = function(hour, min, sec, minsec) {
    this.hour;
    this.min;
    this.sec;
    this.minsec;
    return [hour, min, sec, minsec]
}

setInterval(()=>{
    const Main = new Date()
    const hours = Main.getHours()
    const minutes = Main.getMinutes()
    const seconds = Main.getSeconds()
    data0[0].textContent = hours
    data0[2].textContent = minutes
    data0[4].textContent = seconds
}, 1000)

function TimerFounction() {
    lap.disabled = false
    pause.disabled = false
    restart.disabled = false
    start.disabled =true

let ID = setInterval(function() {
        let minsec = Number(data1[6].textContent)
        let sec = Number(data1[4].textContent)
        let min = Number(data1[2].textContent)
        let hour = Number(data1[0].textContent)

        data1[6].textContent = ++minsec
        if (minsec === 100) {
            data1[4].textContent = ++sec
            data1[6].textContent = '00'
            if (sec === 60) {
                data1[2].textContent = ++min
                data1[4].textContent = '00'
                if (min === 60) {
                    data1[0].textContent = ++hour
                    data1[2].textContent = '00'
                }
            }
        }
        
    }, 10)
    PushToLib.prototype.intervalid = ID
}
start.addEventListener('click', TimerFounction)
pause.addEventListener('click', () => {
    clearInterval(PushToLib.prototype.intervalid)
    start.disabled = false
    pause.disabled = true
})
lap.addEventListener('mousedown', () => {
    libery.push(new  PushToLib(data1[0].textContent, data1[2].textContent, data1[4].textContent, data1[6].textContent))

    let lap = document.createElement('li')

    let value = String(libery[libery.length-1])
    value = value.split(',').join('.')
    lap.textContent = value
    dashboard.append(lap)
})

restart.addEventListener('mousedown', () => {
    clearInterval(PushToLib.prototype.intervalid)
    start.disabled = false
    pause.disabled = true
    lap.disabled = true
    restart.disabled = true
    data1[0].textContent = '00'
    data1[2].textContent = '00'
    data1[4].textContent = '00'
    data1[6].textContent = '00'
})