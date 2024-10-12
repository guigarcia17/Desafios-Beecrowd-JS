export function problem(lines) {

    // Arrow function; 
    const soma = (A, B) => A + B;
    // o map(Number) pega todos os valores do Array e transforma em número.
    // reduce percorre todos os elementos do Array e retorna apernas um valor.
    const resultado = lines.map(Number).reduce(soma);
    console.log(`SOMA = ${resultado}`);





    // Minha solução:
    // const A = parseInt(lines[0]);
    // const B = parseInt(lines[1]);
    // const SOMA = A+B;
    // console.log(`SOMA = ${SOMA}`);

}