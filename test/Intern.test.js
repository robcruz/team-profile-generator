const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getRole", () => {
        it("should return Role", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 4;
            const email = "alekseicruz@gmail.com";
            const school = 'Hawaii Pacific University';
            const engineer = new Intern(name, id, email, school);

            // Assert
            expect(engineer.getRole()).toEqual("Intern")
        })
    });

    describe("getSchool", () => {
        it("should return Github username", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 4;
            const email = "alekseicruz@gmail.com";
            const school = 'Hawaii Pacific University';
            const engineer = new Intern(name, id, email, school);

            // Assert
            expect(engineer.getSchool()).toEqual(school)
        })
    });

});


