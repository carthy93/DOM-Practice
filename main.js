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

const v = document.createElement('img')
v.setAttribute('src', 'data:image/png;base64,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')
v.setAttribute('alt','JS logo')

const w = document.createElement ('button')
w.innerHTML= 'Press'
// w.onclick = () => {
//     alert('button clicked')
// }

w.addEventListener('click', function() {alert('hello')})
// w.style.display = 'none'

div.appendChild(u)
div.appendChild(v)
div.appendChild(w)

body.appendChild(div)

u.classList.add('new')

// u.classList.remove('new')

const students = [{
    name: 'Ajay',
    gender: 'male',
    location: 'chennai',
    mark: 80, 
},
{
    name: 'Balu',
    gender: 'male',
    location: 'chennai',
    mark: 90, 
},
{
    name: 'Chithra',
    gender: 'female',
    location: 'kerela',
    mark: 75, 
},
{
    name: 'Dhanya',
    gender: 'female',
    location: 'chennai',
    mark: 85, 
},
{
    name: 'Raj',
    gender: 'male',
    location: 'delhi',
    mark: 80, 
}
]

console.log('data',students)

const male = students.filter(student => student.gender == 'male')
console.log('male', male)

const female = students.filter(student => student.gender == 'female')
console.log('female', female)

const chennai = students.filter(student => student.location == 'chennai')
console.log('chennai', chennai)

const greaterthan80 = students.filter(student => student.mark > 80 )
console.log('greaterthan80', greaterthan80)



const newdata = students.map(student => {
    return {...student,mark: student.mark + 10, email: 'somename@gmail.com'}
})
 console.log('updated', newdata)


 let newdata2 = newdata.map(student => {
    let obj = {
        ...student,
        mark: student.mark-10,
    }
    return obj
})

console.log('updated2', newdata2)


let percentage = newdata.map(student => {
    return {...student,mark: student.mark+'%'}
})

console.log('percentage', percentage)


const studentstotal = newdata.reduce(myfnc,0)

function myfnc(total,student) {
    return total += student.mark;

}

console.log('studentstotal', studentstotal/students.length )
