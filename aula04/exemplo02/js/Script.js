//Vamos pegar a lista de produto com id = lista
const elementoLista = document.getElementById('lista');

//Vamos pegar o input com id = novoItem
const elementoInput = document.getElementById('novoItem');

//Vamos pegar um elemento button com id = botaoAdicionar
const elementoBotao = document.getElementById('botaoAdicionar');

//Vamos adicionar o metodo addEventListner
elementoBotao.addEventListener('click', function(){
    //vamos ler o produto digitado pelo usuario
    const novoProduto = elementoInput.value;

    //vamos fazer a validação do produto
    if(novoProduto !== ""){
        //1. Vamos criar um elemento li
        const novoItemElemento = document.createElement('li');

        //2. Vamos definir i texto do novo elemento li 
        novoItemElemento.textContent = novoProduto;

        //3. Vamos inserir o li criado no ul
        elementoLista.appendChild(novoItemElemento);

        //4. Vamos limpar o input
        elementoInput.value = '';
    }
});
