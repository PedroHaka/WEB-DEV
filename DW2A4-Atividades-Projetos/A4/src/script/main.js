/* document.querySelector('form').addEventListener('submit', event => {
    //console.log('enviar o formulario');
    //prevenir o envio do formulário com preventDefault()
    event.preventDefault();
})  */

import masks from './modules/mask.js';

document.querySelectorAll('input').forEach(($input) => {
    const fields = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        e.target.value = masks[fields](e.target.value);
    }, false);
});


