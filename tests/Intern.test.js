const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Should create a new object extension titled intern based off of input.', () => {
        const intern = new Intern('john', 76, 'johndoe@email.com', 'College University');

        expect(intern.school).toEqual(expect.any(String));
    })
});

describe('getSchool', () => {
    it('Should retrun a string that is the name of the school intern is attending.', () => {
        const intern = new Intern('john', 76, 'johndoe@email.com', 'College University');

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    })
});

describe('getRole', () => {
    it('Should return a role of Intern', () => {
        const intern = new Intern('john', 76, 'johndoe@email.com', 'College University');

        expect(intern.getRole()).toEqual('Intern');
    })
});