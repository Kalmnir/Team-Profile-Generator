const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Should create an employee object based on input.', () => {
        const employee = new Employee('john', 12, 'johndoe@email.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    })
});

describe('getName', () => {
    it('Should get the name of the employee', () => {
        const employee = new Employee('john', 12, 'johndoe@email.com')

        expect(employee.getName()).toEqual(expect.any(String));
    })
});

describe('getId', () => {
    it('Should get the ID number from the employee', () => {
        const employee = new Employee('john', 12, 'johndoe@email.com')

        expect(employee.getId()).toEqual(expect.any(Number));
    })
});
describe('getEmail', () => {
    it('Should get the email adress of the employee', () => {
        const employee = new Employee('john', 12, 'johndoe@email.com')

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    })
});
describe('getRole', () => {
    it('Should get the role of the employee', () => {
        const employee = new Employee('john', 12, 'johndoe@email.com')

        expect(employee.getRole()).toEqual('Employee');
    })
});