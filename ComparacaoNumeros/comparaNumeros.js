function compararNumeros(primeiroNumero, segundoNumero){
    if (!primeiroNumero || !segundoNumero) "Defina dois números!"
    const saoIguais = primeiroNumero === segundoNumero;
    const soma = primeiroNumero + segundoNumero;

    if (saoIguais) {
        console.log(`Os números ${primeiroNumero} e ${segundoNumero} são iguais.`);
    } else {
        console.log(`Os números ${primeiroNumero} e ${segundoNumero} não são iguais.`);
    }

    console.log(`Sua soma é ${soma},`);

    if(soma < 10){
        console.log('que é menor do que 10');
    } else {
        console.log('que é maior do que 10');
    }

    if(soma < 20){
        console.log('e menor do que 20');
    } else {
        console.log('e maior do que 20');
    }
}

compararNumeros(10, 5);