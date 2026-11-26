import restar from './restador.js';

describe('Restar', () => {
    it('deberia restar dos numeros', () => {
        expect(restar(3, 2)).toEqual(1);
    });
});