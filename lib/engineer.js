const Employee  = require("../lib/employee");

// Engineer will also have:
//
//     github // GitHub username
//
// getGithub()
//
// getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
}
