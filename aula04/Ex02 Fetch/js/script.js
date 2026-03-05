const loadingElement = document.getElementById('loading')
const produtoElement = document.getElementById('produto')
const errorElement = document.getElementById('error')

fetch('https://fakestoreapi.com/products/1')
.then(response => {
    if (!response.ok) {
        throw new Error('Deu erro ao buscar os dados ' + response.status);
    }
    return response.json()
})

.then(data => {
    loadingElement.style.display = 'none' //oculta a msg carregando produto
    produtoElement.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <img src='${data.image}' alt= '${data.title}' style='max-width: 200px'>
    `
})

.catch(error => {
    loadingElement.style.display = 'none'
    errorElement.textContent = error.message
})
