fetch('http://localhost:3000/heroines')
.then(response => response.json())
.then(result => {
    result.map(heroine => {
        let h2 = document.createElement('h2')
        h2.innerHTML = `<a href="show.html?id=${heroine.id}">${heroine.name}</a>`
        document.body.appendChild(h2)  
    })
}) 






        