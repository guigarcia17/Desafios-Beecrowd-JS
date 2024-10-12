export function problem(lines) {

    const [notaA, notaB] = lines;
    const pesoA = 3.5;
    const pesoB = 7.5;

    const media = (notaA * pesoA + notaB * pesoB) / (pesoA + pesoB);

    console.log(`MEDIA = ${media.toFixed(5)}`);

    // Resolução sem os números mágicos;
    // const [notaA, notaB] = lines;
    // const media = (notaA * 3.5 + notaB * 7.5) / 11;
    // console.log(`MEDIA = ${media.toFixed(5)}`);


}