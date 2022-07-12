function calcular(){
    const inputAltura = document.querySelector('input.one').value/100;
    const inputPeso = document.querySelector('input.two').value;
    let imc = 0;

    imc = inputPeso / inputAltura ** 2;
    let msg = '';

    if(imc < 18.5){
        msg = 'Você está magro'
    }else if(imc < 24.9){
        msg = 'Você está no peso normal'
    }else if(imc < 29.9){
        msg = 'Você está com sobrepeso'
    }else if(imc < 39.9){
        msg = 'Você está com obesidade'
    }else if(imc > 39.9){
        msg = 'Você está com obesidade mórbida'
    }
    document.querySelector('h2.result').innerText=`Seu IMC é ${imc}, ${msg}!`
}

