//Funções que mostram ou escondem o formulário
const Modal = {
    open(){
        //Abrir modal
        //Adicionar a classe "active" ao modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        //Fechar o modal
        //Remover a classe "active" do modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

//Array de objetos 'Transaction'
const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000, //o formato simplificado para salvar o dado amount, sem virgulas -'500''00'
    date: '23/01/2021'
}, {
    id: 2,
    description: 'Website',
    amount: 500000, //o formato simplificado para salvar o dado amount, sem virgulas '5000''00'
    date: '23/01/2021'
}, {
    id: 3,
    description: 'Internet',
    amount: -20000, //o formato simplificado para salvar o dado amount, sem virgulas -'200''00'
    date: '23/01/2021'
}]

//Funções que calculam entradas, saídas e saldo final
const Transaction = {
    income(){
        //somar as entradas
    },
    
    expenses(){
        //somar as saídas
    },
    
    balance(){
        //somar as entradas e subtrair as saídas, tendo o total final
    }
}

//Funções que manipulam o DOM
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction){
        
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionsContainer.appendChild(tr);
    },
    
    innerHTMLTransaction(){
        const html = `
            <td class="description">${transactions.description}</td>
            <td class="expense">${transactions.amount}</td>
            <td class="date">${transactions.date}</td>
            <td>
                <img src="assets/minus.svg" alt="Remover Transação">
            </td>
        `;
        return html;
    }
}

DOM.addTransaction(transactions);