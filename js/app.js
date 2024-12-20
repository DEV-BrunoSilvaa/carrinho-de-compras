let totalGeral = 0;
limpar ();

function adicionar() {
    //recuperar valores Nome do produto quantidade e valor;
    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // calcular o preço o nosso subtotal;;
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');


    // adicionar ao carrinho puxando no HtmL (usando o + para ele somar os produtos sem excluir) (  sempre concatena) ;; 
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>`
    
    // atualizar o valor total (sempre concatena)
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    //quando adicionar ele zera o campo
    document.getElementById('quantidade').value = 0

}

function limpar () {

    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}