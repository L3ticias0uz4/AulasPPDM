//vamos trazer os dados dos usuarios do jsonplaceholder
//usando o metodo nativo fetch()
fetch('https://jsonplaceholder.typicode.com/users') 

//será gerado uma promisse
//tenho 10 usuarios no formato JSON

//converter a resposta no formato JSON para um objeto JS
.then(response => response.json())

//com o JSON convertido para objeto, vamos exibir as informações ma página
.then(usuario => {
    const todosUsuarios = document.getElementById('listaUsuarios')

    usuario.forEach(user => {
        const cadaUsuario = document.createElement('li');
        cadaUsuario.textContent = user.name + '(' + user.email + ')';
        todosUsuarios.appendChild(cadaUsuario);
    })
})
.catch(error =>{
    document.getElementById('todosUsuarios').textContent = 'Erro ao buscar os usuarios'
})