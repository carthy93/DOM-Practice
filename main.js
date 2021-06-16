const p = document.getElementById ('para1') 
console.log (p)

document.getElementsByTagName ('p')[0].innerHTML = "Fill to create an account"


let q = document.getElementsByTagName ('p')[0]

q.style.color = 'orange'

q.style.fontSize = '35px'

let r = document.getElementsByClassName('para2')[0]

r.style.color ='red'
r.style.fontSize = '20px'

const s = document.getElementsByClassName('enter')

for(i=0; i<s.length; i++){
    s[i].style.color = 'blue'
}

let t = document.querySelector('.para2')[0]
console.log(t)


const body = document.getElementsByTagName('body')[0]
const div = document.createElement('div')
const u = document.createElement('p')

u.innerHTML = "New Para"
div.appendChild(u)
body.appendChild(div)