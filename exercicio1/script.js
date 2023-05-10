// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const imprirNome = (nome) =>{

    console.log(`Olá,${nome}`);
}


imprirNome("Daniel");

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

const receberNumero = (numero) =>{

    const tabuadaDe1 = numero * 1 

    console.log(`Multiplicando 1 vezes ${numero} é ${tabuadaDe1}`);
}

receberNumero(1);
receberNumero(2);
receberNumero(3);
receberNumero(4);
receberNumero(5);
receberNumero(6);
receberNumero(7);
receberNumero(8);
receberNumero(9);
receberNumero(10);

const comentar = () => {

    console.log("oie")

}

comentar();

