const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Should create a new Employee extension object titled engineer based off of input.', () => {
        const engineer = new Engineer('John', 20, 'johndoe@email.com', 'johndoe');

        expect(engineer.github).toEqual(expect.any(String));
    })
});

describe('getGithub', () => {
    it('Should get the github username.', () => {
        const engineer = new Engineer('John', 20, 'johndoe@email.com', 'johndoe');

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    })
});

describe('getRole', () => {
    it('Should get the role of the engineer', () => {
        const engineer = new Engineer('John', 20, 'johndoe@email.com', 'johndoe');

        expect(engineer.getRole()).toEqual('Engineer');
    })
});