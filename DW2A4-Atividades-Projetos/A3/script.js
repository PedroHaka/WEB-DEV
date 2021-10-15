

//Funções que mostram ou escondem o formulário
const modal = {
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

