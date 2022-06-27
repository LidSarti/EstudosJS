function calculadora(){
    const operacao = prompt("Escolha uma operação\n1- soma (+)\n2- Subtração (-)\n3- Multiplicação\n4- Divisão real(/)\n5- Divisão inteira(%)\n6- Potenciação(**)");

    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida!')
        calculadora();
    } else {

        let primeiroValor = Number(prompt("Insira o primeiro valor: "));
        let segundoValor = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if(!primeiroValor || !segundoValor){
            alert('Erro - parâmetros inválidos')
            calculadora()
        } else {
            function soma(){
                resultado = primeiroValor + segundoValor;
                alert(`${primeiroValor} + ${segundoValor} = ${resultado}`);
            }
    
            function subtracao(){
                resultado = primeiroValor - segundoValor;
                alert(`${primeiroValor} - ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao(){
                resultado = primeiroValor * segundoValor;
                alert(`${primeiroValor} * ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoReal(){
                resultado = primeiroValor / segundoValor;
                alert(`${primeiroValor} / ${segundoValor} = ${resultado}`);
                novaOperacao();
            }
    
            function divisaoInteira(){
                resultado = primeiroValor % segundoValor;
                alert(`o resto da divisão de ${primeiroValor} por ${segundoValor} é ${resultado}`);
                novaOperacao();
            }
    
            function potenciacao(){
                resultado = primeiroValor ** segundoValor;
                alert(`${primeiroValor} elevado a ${segundoValor} é igual a: ${resultado}`);
                novaOperacao();
            }
    
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n1- sim\n2-não');
                if (opcao == 1){
                    calculadora();
                } else if(opcao == 2){
                    alert('até mais!')
                }
                else{
                    alert('Digite uma opção valida')
                    novaOperacao();
                }
            }

            switch(operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

    

calculadora();