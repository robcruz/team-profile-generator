const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return name", () => {
            // Arrange
            const name = 'First Employee';
            const id = 1;
            const email = "alekseicruz@gmail.com"
            const title = 'Automation Architect';
            const employee = new Employee(name, id, email, title);

            // Assert
            expect(employee.getName()).toEqual(name)
        })
    });

    describe("getId", () => {
        it("should return ID", () => {
            // Arrange
            const name = 'First Employee';
            const id = 2;
            const email = "alekseicruz@gmail.com"
            const title = 'Automation Architect';
            const employee = new Employee(name, id, email, title);

            // Assert
            expect(employee.getId()).toEqual(id)
        })
    });

    describe("getEmail", () => {
        it("should return Email", () => {
            // Arrange
            const name = 'First Employee';
            const id = 3;
            const email = "alekseicruz@gmail.com"
            const title = 'Automation Architect';
            const employee = new Employee(name, id, email, title);

            // Assert
            expect(employee.getEmail()).toEqual(email)
        })
    });

    describe("getRole", () => {
        it("should return Role", () => {
            // Arrange
            const name = 'First Employee';
            const id = 4;
            const email = "alekseicruz@gmail.com"
            const title = 'Automation Architect';
            const employee = new Employee(name, id, email, title);

            // Assert
            expect(employee.getRole()).toEqual(title)
        })
    });

});


