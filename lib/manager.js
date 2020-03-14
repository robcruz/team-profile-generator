const Employee = require("../lib/employee");

// Employee's properties and methods, Manager will also have:
//
// officeNumber
//
// getRole() // Overridden to return 'Manager'

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;

