const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should return a new class extension object titled Manager based on input', () => {
        const manager = new Manager('john', 90, 'johndoe@email.com', 2);

        expect(manager.officeNumber).toEqual(expect.any(Number));
    })
});

describe('getRole', () => {
    it('Should return a role of Manager', () => {
        const manager = new Manager('john', 90, 'johndoe@email.com', 2);

        expect(manager.getRole()).toEqual('Manager')
    })
});