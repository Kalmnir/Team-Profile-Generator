const Employee = require('./Employee');

// Manager class extension constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;