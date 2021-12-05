import masks from './modules/mask.js';
import validations from './modules/valid.js';

    document.querySelectorAll('input').forEach(($input) => {
        const fields = $input.dataset.js;

        $input.addEventListener('input', (e) => {
            e.target.value = masks[fields](e.target.value);
            let validStatus = validations[fields](e.target.value);
            if(validStatus == true){
                document.getElementById(`input_${[fields]}`).classList.add('validInput');
            }
            if(validStatus == false){
                document.getElementById(`input_${[fields]}`).classList.add('errorInput');
            }
        }, false);
    });


