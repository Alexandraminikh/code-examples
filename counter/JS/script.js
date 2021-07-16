const btn = document.getElementsByClassName('count-btn')[0]
const counter = document.getElementsByClassName('count-num')[0]

let num = Number(localStorage.getItem('counter')) || 0
counter.innerHTML = num

btn.onclick = () => {
    let num = Number(localStorage.getItem('counter')) + 1 || 1
    counter.innerHTML = num
    localStorage.setItem('counter', num)
}
