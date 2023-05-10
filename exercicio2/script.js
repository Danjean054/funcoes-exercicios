
// Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
const imprirSoma = (numero,numero2) => {

    const somar = numero + numero2

    console.log(`A soma entre  ${numero} e ${numero2} é ${somar} `);
}

imprirSoma(4,5);

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.


const informarMaiorOuIgual = (number,number2) =>{

    const imprirMaiorOuIgual = number >= number2 ;

    console.log(`${number} é maior ou igual que ${number2} ? ${number >= number2}`);
}

informarMaiorOuIgual(151566,4685486);

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const informaNumeroPar = (apuramentos) =>{

    const numeroPar = apuramentos %2 ===0

    console.log(`O número ${apuramentos} é par? ${numeroPar}`);

}

informaNumeroPar(5);

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const salarioBruto = (salarioliquido) => {

const salarioDesconto = salarioliquido * 0.1;

return `O seu salário de ${salarioliquido} com o desconto do INSS ficara ${salarioDesconto}`;
}

console.log(salarioBruto(214554.45));

