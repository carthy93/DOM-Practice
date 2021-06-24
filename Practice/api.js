fetch('https://jsonplaceholder.typicode.com/photos')
.then((response) => response.json())
.then (json => {
    previewImage (json)
})

 const previewImage = (json) => {
     json.map((photo) => {
         const li = document.createElement('li')
         const img = document.createElement('img')
         img.src = photo.url
         img.alt= photo.title
         li.appendChild(img)
         document.getElementById('photosList').appendChild(li)
     })
 } 