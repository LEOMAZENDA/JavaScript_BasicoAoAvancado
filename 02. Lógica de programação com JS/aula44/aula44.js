function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('X e Y precisam ser numeros.');
    }
    return x + y
}

try {
    console.log(soma(2, 4));
    console.log(soma(2, '4'));
} catch (error) {
    // console.log(error); // N~~ao mostrar isso no front 
    console.log('Alguma coisa mais amigável para o usuário...');
}
