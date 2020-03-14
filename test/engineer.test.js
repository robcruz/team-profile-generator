const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getRole", () => {
        it("should return Role", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 4;
            const email = "alekseicruz@gmail.com";
            const github = 'robcruz';
            const engineer = new Engineer(name, id, email, github);

            // Assert
            expect(engineer.getRole()).toEqual("Engineer")
        })
    });

    describe("getGithub", () => {
        it("should return Github username", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 4;
            const email = "alekseicruz@gmail.com";
            const github = 'robcruz';
            const engineer = new Engineer(name, id, email, github);

            // Assert
            expect(engineer.getGithub()).toEqual(github)
        })
    });

});


