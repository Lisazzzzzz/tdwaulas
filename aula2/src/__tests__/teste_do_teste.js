// __tests__/sum.test.js

const sum = require('../pages/teste'); // Importa a função sum do ficheiro sum.js

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4); // Espera que sum(2, 2) devolva 4
});

