let produtos = [];

async function carregar(produtos) {
    try{
        const resposta = await featch('produtos.json')
        produtos = await resposta.json();
        exibirprodutos();
    } catch (error) {
        connsole.error('Erro ao carregar prdutos', error);
        alert('Erro ao carregar os produtos');
    }
}

function adicionarPodutos(){

    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const disponivel = document.getElementById('disponivel').value === 'true';

    if (nome && !isNaN(preco)) {
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: dispomivel,
        };
        produtos.push(novoProduto);

        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('disponivel').value = 'true';

        exibirprodutos();
    } else{
        alert('Por favor preencha corretamente o nome e o preco do produto')

    }

}

function exibirprodutos(params) {
     const listaProdutosDiv = document.getElementById('lista-produtos');

     listaProdutosDiv.innerHTML = '';

     produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
     produtoDiv.classList.add('produto');

     const nomeH3 = document.getElementById('h3');
     nomeH3.textContent = produto.nome
     
     const precoP = document.createElement('p');
     precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`
     
     const disponibilidadeP = document.createElement('p')
     disponibilidadeP.textContent = `Disponibilidade`

        const spanDisponibilidade = document.createElement
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponivel' : 'indisponivel'
        spanDisponibilidade.classList.add (produto.disponivel ? 'Disponivel' : 'indiponivel')

         disponibilidadeP.appendChild(spanDisponibilidade);

         produtoDiv.appendChild(nomeH3)
         produtoDiv.appendChild(precoP)
         produtoDiv.appendChild(disponibilidadeP)

         listaProdutosDiv.appendChild(produtoDiv)
     
}
)
    }