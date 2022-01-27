function calculadora() {
    const operacao = Number(prompt('Escolha uma Operação:\n 1->Soma(+)\n 2->Subtração(-)\n 3->Multiplicação(*)\n 4->Divisão Real(/)\n 5->Divisão Interira(%)\n 6->Potenciação(**)'));

    if (!operacao || operacao > 6){
        alert('ERRO - Operação inválida');
        calculadora();
    }else{
            let n1 = Number(prompt('Insira o 1º valor:'));
            let n2 = Number(prompt('Insira o 2º valor:'));
            let resultado;

        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
        }
        function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
        }
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
        }
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} e igual a ${resultado}`)
        }
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª e igual a ${resultado}`)
        }
        function novaOperacao(){
            let opcao = prompt('Deseja fazer uma nova operação?\n 1->Sim\n 2->Não');
            if (opcao == 1){
                calculadora();
            } else if (opcao ==2){
                alert('Obrigado, calculadora encerrada.')
            } else{
                alert('ERRO - Digite uma opção válida.')
                novaOperacao()
            }
        }
    }
    if (operacao == 1){
        soma();
        novaOperacao();
    } else if (operacao == 2){
        subtracao();
        novaOperacao();
    } else if (operacao == 3){
        multiplicacao();
        novaOperacao();
    } else if (operacao ==4){
        divisaoReal();
        novaOperacao();
    } else if (operacao == 5){
        divisaoInteira();
        novaOperacao();
    } else if (operacao == 6){
        potenciacao();
        novaOperacao();
    }  
}

calculadora();