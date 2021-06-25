
//Example 1

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then((response) => response.json())
// .then (json => {
//     previewImage (json)
// })

//  const previewImage = (json) => {
//      json.map((photo) => {
//          const li = document.createElement('li')
//          const img = document.createElement('img')
//          img.src = photo.url
//          img.alt= photo.title
//          li.appendChild(img)
//          document.getElementById('photosList').appendChild(li)
//      })
//  } 


// Example 2 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => {
    data.map((details) => {
        const userCard = document.createElement('div')
        userCard.classList.add('card')
        const userData = [
            details.name,
            details.email,
            details.website,
            details.phone,
        ]

        userData.map((detail) => {
            const p = document.createElement('p')
            p.innerHTML = detail
            userCard.appendChild(p)
        })

        const li = document.createElement('li')
        li.style.listStyleType = 'none'
        li.appendChild(userCard)
        document.getElementById('users').appendChild(li)
    })
})


//Example 3

const allTodos = fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => {
       todos = data
}).catch((error) => {
    console.log('error is', error)
})


const activeTodos = () => {
    console.log('Active-Todos', filterTodo(todos,true))


}


const completedTodos = () => {
    console.log('Completed-Todos', filterTodo(todos,false))

}


const filterTodo = (data,status) => {
    return data.filter((todo) => todo.completed === status)
}
