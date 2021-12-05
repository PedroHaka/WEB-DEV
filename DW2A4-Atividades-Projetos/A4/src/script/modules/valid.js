const validations = {
    cpf(value){
        let [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11] = 
        value.replace(/\D/g, '');
        let soma1, soma2, resto1, resto2;
        if(num1 === num2 && num2 == num3 && num3 == num4 && num4 == num5 && 
            num5 == num6 && num6 == num7 && num7 == num8 && num8 == num9 && 
            num9 == num10 && num10 == num11){
                return false;
        }else{
            soma1 = num1 * 10 +  num2 * 9 + num3 * 8 + num4 * 7 + 
            num5 * 6 + num6 * 5 + num7 * 4 + num8 * 3 + num9 * 2;
            resto1 = (soma1 * 10) % 11;
            if(resto1 == 10){
                resto1 = 0;
            }
            soma2 = num1 * 11 +  num2 * 10 + num3 * 9 + num4 * 8 + 
            num5 * 7 + num6 * 6 + num7 * 5 + num8 * 4 + num9 * 3 + 
            num10 * 2;
            resto2 = (soma2 * 10) % 11;
            if(resto2 == 10){
                resto2 = 0;
            }
            if(resto1 == num10 && resto2 == num11){
                return true;
            }else{
                return false;
            }
        }
    },
    date(value){
        let [num1,num2,num3,num4,num5,num6,num7,num8] = value.replace(/\D/g, '');
        if (`${num1}${num2} <= 31 && ${num3}${num4} <= 12 && ${num5}${num6}
        ${num7}${num8} <= 2021`){
            return true;
        }else{
            return false;
        }
    },
    fone(value){
        let [num1,num2,num3,num4,num5,num6,num7,num8,num9,num10,num11] = 
        value.replace(/\D/g, '');
        //DDDs validos
        var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
            21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,
            61, 62, 64, 63, 65, 66, 67, 68, 69, 71, 73,74, 
            75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 
            91, 92, 93, 94, 95, 96, 97, 98, 99];
        
        //verifica se a string tem o número correto de caracteres (10 ou 11)
        if(!(value.lenght >= 10 && value.lenght <= 11)) return false;
        //verifica se o DDD é valido
        if (codigosDDD.indexOf(parseInt(value.substring(0, 2))) == -1) return false;
        //se passou em todos entao return true
        return true;
    },
    cep(value){
        let [num1,num2,num3,num4,num5,num6,num7,num8] = 
        value.replace(/\D/g, '');
        if(value.lenght !== 7) return false;
        return true;
    }
}

export default validations;