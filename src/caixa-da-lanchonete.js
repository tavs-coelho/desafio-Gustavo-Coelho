class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };

        const formasDePagamento = ['debito', 'credito', 'dinheiro'];

        if (!formasDePagamento.includes(metodoDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        let total = 0;
        let cafeCount = 0;
        let sanduicheCount = 0;

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const valor = cardapio[codigo];

            if (!valor) {
                return "Item inválido!";
            }

            if (codigo === 'cafe') {
                cafeCount += parseInt(quantidade);
            } else if (codigo === 'sanduiche') {
                sanduicheCount += parseInt(quantidade);
            } else if (codigo === 'chantily' || codigo === 'queijo') {
                if (quantidade > 0 && (cafeCount === 0 && sanduicheCount === 0)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }

            total += valor * quantidade;
        }

        if (total === 0) {
            return "Não há itens no carrinho de compra!";
        }

        if (metodoDePagamento === 'dinheiro') {
            total *= 0.95; // 5% de desconto
        } else if (metodoDePagamento === 'credito') {
            total *= 1.03; // 3% de acréscimo
        }

        return `R$ ${total.toFixed(2)}`;
    }
}

export { CaixaDaLanchonete };