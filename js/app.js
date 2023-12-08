function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDesejada = document.getElementById('qtd').value;
    let estoque = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    if (estoque < quantidadeDesejada) {
        alert('Quantidade indisponível!');
    } else {
        document.getElementById(`qtd-${tipoIngresso}`).textContent -= quantidadeDesejada;
    }
    document.getElementById('qtd').value = '';
}