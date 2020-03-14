// The first class is an Employee parent class with the following properties and methods:
//
//     name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    // Returns 'Employee'
    getRole() {
        return this.title;
    }
}

module.exports = Employee;