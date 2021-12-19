function calculadora() {
        const num1 = Number(prompt('Insira o primeiro número:'));
        const num2 = Number(prompt('Insira o segundo número:'));
        let resultado;

    function comparaNumeros () {
            if (num1 !== num2) {
                alert(`Os números ${num1} e ${num2} não são iguais.`);
            } else {
                alert(`Os números ${num1} e ${num2} são iguais.`);
            }                
    }
    if(!num1 || !num2) {
        alert('parâmetros inválidos');
        calculadora();        
    } else {
        function soma() {
            resultado = num1 + num2;
        }
    }
    
    function comparaResultado () {
        let resultado10 = 'menor que';
        let resultado20 = 'menor que';
        const compara10 = resultado > 10;
        const compara20 = resultado > 20;
        const igual10 = resultado == 10;
        const igual20 = resultado == 20;

        if (compara10) {
            resultado10 = 'maior que'
        }
        if (compara20) {
            resultado20 = 'maior que'
        }
        if (igual10) {
            resultado10 = 'igual a'
        }
        if (igual20) {
            resultado20 = 'igual a'
        }
        alert(`Sua soma é ${resultado}, que é ${resultado10} 10 e ${resultado20} 20.`)
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais!');
        } else {
            alert('Digite uma opção válida!');
            novaOperacao();
        }
    }
comparaNumeros(), soma(), comparaResultado();    
}

calculadora();