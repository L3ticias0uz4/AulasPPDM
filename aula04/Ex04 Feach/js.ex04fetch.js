document.addEventListener('DOMContentLoaded', function () {
    
    const produtoFormElement =document.getElementById('produtoForm')
    const produtoTableElement = document.getElementById('produtoTable')

    this.getElementsByTagName('tbody')[0]

    const  ProdutoIdElement = document.getElementById('produtoId')
    const cancelarBnElement = document.getElementById('cancelar')

    // variavel para rastrear se estamos editando um produto
    let editing = false;

    // funçao para obter os dados da localstorage
    function getprodutos() {
        const produtos = localStorage.getItem('produtos')
        return produtos ? JSON.parse('produtos') : []
    }

    // funçao para salvar um novo produto
    function salvar() {
        
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }

    //Função para excluir o item 
    function exibirrproduto() {
        produtoTableElement.innerHTML = '' //Limpa a tabela antes de exibir os produtos

        const produtos = getprodutos()

        for (let i = 0; i < produto.lenght; i++){
        const produto = produtos[i]

        const row = produtoTableElement.insertRow()

        const nomeCell = row.insertCell()

        nomeCell.textContent = produto.nome

        const precoCell = row.insertCell()
        precoCell.textContent = 'R$' + produto.preco.toFixed(2)
        
        const disponibilidadeCell = row.insertCell()
        disponibilidadeCell.textContent = produto.disponibilidade
        disponibilidadeCell.ClassList.add(produto.disponibilidade === 'Disponivel' ? disponivel : 'indisponivel')

        const actioncell = row.insertCell()

        const editarbtn = document.createElement = 'Editar'
        editarbtn.onclick = () => editarProdutos(i) 
        actioncell.appendChild(editarbtn)
        
         const excluirrbtn = document.createElement = 'Excluir'
        excluirbtn.onclick = () => excluirProdutos(i) 
        actioncell.appendChild(excluirbtn)
        
            
    }
    }


    // funçao para adicionar produto ou atualizar um produto

    produtoFormElement.addEventListener('submit', function event() {
        
        eventPreventDefault()
        const nome = document.getElementById('nome').value
        const preco = parseFloat(document.getElementById('preco').value)
        const disponibilidade = document.getElementById('disponibilidade').value
        
        const produtoId = ProdutoIdElement.value

        if (nome && !isNaN(preco)) {
            
            const produtos = getprodutos()

            if(editing){
                produtos[produtoId].nome = nome
                produtos[produtoId].preco = preco
                produtos[produtoId].disponibilidade = disponibilidade
                editing = false
            }else{

                produtos.push({nome: nome, preco: preco, disponibilidade: disponibilidade})
            }
            salvarProdutos()
            exibirrproduto()
            produtoFormElement.reset
            produtoId.value = 'value'
        }else{
            alert('Porfavor prencha o nome e o produto corretamente')
        }
        
    
    })
})