const produtos = {
    produto1: {
        nome: "Camiseta algodão premium",
        preco: 59.99,
        disponivel: true,
    },
    produto2: {
        nome: "Calça Jeans Slim Fit",
        preco: 89.99,
        disponivel:false,
    },
    produto3: {
        nome: "Tênis Esportivo Nike",
        preco: 400.00,
        disponivel: true,
    }
};
//pegar a div que vamos exibir os produtos

const listarprodutosdiv = document.getElementById('lista-de-produtos');

for(const key in produtos){

    if(produtos.hasOwnProperty(key)){
        const produto = produtos[key]
        const produtoDiv = document.createElement('div')

        produtoDiv.classList.add('produto');

        const nomeH3 = document.createElement('H3');

        nomeH3.textContent = produto.nome

        const precoP = document.createElement('p')

        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`

        const disponibilidadeP = document.createElement('p')

        disponibilidadeP.textContent = 'Disponibilidade :'

        const spanDisponibilidade = document.createdElement('span')
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponivel' : 'indisponivel'

        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'idisponivel')

        disponibilidadeP.appendChild(spanDisponibilidade)

        produtoDiv.appendChild(nomeH3)
         produtoDiv.appendChild(precoP)
         produtoDiv.appendChild(disponibilidadeP)


         listarprodutosdiv.appendChild(produtoDiv)
    }

}