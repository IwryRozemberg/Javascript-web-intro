const inputQuantidades = document.querySelectorAll(".quantidade");
const columnPrecos = document.querySelectorAll(".item-preco");
const columnValorPedido = document.querySelectorAll(".item-valor-pedido");
const btnIncrementoList = document.querySelectorAll(".incremento");
const btnDecrementoList = document.querySelectorAll(".decremento");
const columnQtdeTotal = document.querySelector("#total-qtde");
const columnValorTotal = document.querySelector("#total-valor");
const formularioPedido = document.forms.pedido

console.dir(columnValorPedido);

btnIncrementoList.forEach((botao) => botao.addEventListener('click', handleEventClick, false));
btnDecrementoList.forEach((botao) => botao.addEventListener('click', handleEventClick, false));
formularioPedido.addEventListener('submit', (event) => {
    let qtdeTotal = Number(columnQtdeTotal.textContent);
    if (qtdeTotal === 0) {
        event.preventDefault();
    } else {

    }
});

function handleEventClick(event) {
    const idClick = this.id;

    console.log(idClick);
    const tipoOperacao = this.textContent;
    const {
        valorTotal,
        qtdeTotal,
        valorPizza,
        valorPedido
    } = buscaValoresAtuais(idClick);
    adicionaPedido(tipoOperacao, idClick, valorTotal, qtdeTotal, valorPizza, valorPedido)
};

function buscaValoresAtuais(index) {
    return {
        valorTotal: Number(columnQtdeTotal.textContent),
        qtdeTotal: Number(columnValorTotal.textContent),
        valorPizza: Number(columnPrecos[index].textContent),
        valorPedido: Number(columnValorPedido[index].textContent),
    }
}

function adicionaPedido(tipoOperacao, index, valorTotal, qtdeTotal, valorPizza, valorPedido) {
    if (tipoOperacao === "+") {
        columnQtdeTotal.textContent = valorTotal + valorPizza;
        columnValorPedido[index].textContent = valorPedido + valorPizza;
        columnValorTotal.textContent = qtdeTotal + 1;
        inputQuantidades[index].value++;
    } else if (inputQuantidades[index].value > 0) {
        columnQtdeTotal.textContent = valorTotal - valorPizza;
        columnValorPedido[index].textContent = valorPedido - valorPizza;
        columnValorTotal.textContent = qtdeTotal - 1;
        inputQuantidades[index].value--;
    }
}