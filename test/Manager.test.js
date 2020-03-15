const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("getRole", () => {
        it("should return Role", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 4;
            const email = "alekseicruz@gmail.com";
            const officeNumber = 1;
            const engineer = new Manager(name, id, email, officeNumber);

            // Assert
            expect(engineer.getRole()).toEqual("Manager")
        })
    });

    describe("getOfficeNumber", () => {
        it("should return Github username", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 4;
            const email = "alekseicruz@gmail.com";
            const officeNumber = 1;
            const engineer = new Manager(name, id, email, officeNumber);

            // Assert
            expect(engineer.getOfficeNumber()).toEqual(officeNumber)
        })
    });

});


