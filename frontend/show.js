
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch (`http://localhost:3000/heroines/${id}`)
    .then(response => response.json())
    .then( heroine => {

        let h2 = document.createElement('h2')
        let p = document.createElement('p')

        h2.innerText = heroine.name
        p.innerText = heroine.super_name
        
        document.body.append(h2,p)  
    })



