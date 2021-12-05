/*  '\d+?$' expressão para registrar todos os números 
    após o agrupamento $1 independentemente de quantos 
    números sejam, até o final da string, similar à um 
    rest/spread operator, trabalhando com uma quantidade 
    indefinida de elementos.
*/

const masks = {
    cpf(value) {
        return value.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
    },
    date(value){
        return value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})\d+?$/, '$1');
    },
    fone(value){
        return value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    },
    cep(value){
        return value.replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1');
    }
}

/* document.querySelectorAll('input').forEach(($input) => {
    const fields = $input.dataset.js;

    $input.addEventListener('input', (e) => {
        e.target.value = masks[fields](e.target.value);
    }, false);
}); */

export default masks;
