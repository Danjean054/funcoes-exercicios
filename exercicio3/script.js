// # Exercício 3




 // b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

 let numero = Number(prompt("Digite um número"))

 let numero2 = Number(prompt("Digite um número"))


// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

const soma = (n1,n2) =>{

    const operacaoDeSoma = n1 + n2;

    return `A soma entre ${n1} e ${n2} é ${operacaoDeSoma}`;
}

const multiplicacao = (n1,n2) =>{

    const operacaoDeMultiplicacao = n1 * n2 ;

    return `A multiplicação entre ${n1} e ${n2} é ${operacaoDeMultiplicacao}`;
}

const subtracao = (n1,n2) =>{

    const operacaoDeSubtracao = n1 - n2;

    return `A subtração entre ${n1} e ${n2} é ${operacaoDeSubtracao}`;
} 


const divisao = (n1,n2) =>{

    const operacaoDeDivisao = n1 / n2;

    return `A divisão entre ${n1} e ${n2} é ${operacaoDeDivisao}`
    }
    
    // c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
    soma(numero,numero2)
    multiplicacao(numero,numero2)
    subtracao(numero,numero2)
    divisao(numero,numero2)

    // d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
    let res = soma(numero,numero2)

    let res2 = multiplicacao(numero,numero2)

    let res3 = subtracao(numero,numero2)

    let res4 = divisao(numero,numero2)

    console.log(res);

    console.log(res2);
    
    console.log(res3);
    
    console.log(res4);




 