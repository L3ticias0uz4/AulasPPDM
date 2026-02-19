//Vamos pegar o elemento button con id = alternaBotao
const elementoBotao = document.getElementById('alterarBotao');

//Vamos pega o elemento div com id = mensagem
const elementoDiv = document.getElementById('mensagem');

//Vamos adicionar o metodo addEventListener para escutar
//O evento click
elementoBotao.addEventListener('click', function() {
    //1. Vamos verificar se a mensagem esta oculta
    if(mensagem.classList.contains('oculto')){
        //Vamos remover o estilo
        mensagem.classList.remove('oculto');
    }else{
        mensagem.classList.add('oculto');
    }
})