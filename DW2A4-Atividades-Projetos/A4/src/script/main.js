document.querySelector('form').addEventListener('submit', event => {
    console.log('enviar o formulario');
    //prevenir o envio do formulário com preventDefault()
    event.preventDefault();
})

