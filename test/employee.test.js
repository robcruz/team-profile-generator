const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return name", () => {
            console.log('Arrange...')
            // Arrange
            const name = 'Rob Cruz';
            const id = 123;
            const title = 'Automation Architect';
            const employee = new Employee(name, id, title);

            console.log('Assert...')
            // Assert
            expect(employee.getName()).toEqual(name)
        })
    });

    describe("getId", () => {});

    describe("getEmail", () => {});

    describe("getRole", () => {});
});


