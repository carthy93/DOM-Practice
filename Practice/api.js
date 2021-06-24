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