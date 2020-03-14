const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return name", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 1;
            const email = "alekseicruz@gmail.com";
            const github = 'robcruz'
            const engineer = new Engineer(name, id, email, name);

            // Assert
            expect(engineer.getName()).toEqual(name)
        })
    });

    describe("getId", () => {
        it("should return ID", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 2;
            const email = "alekseicruz@gmail.com"
            const github = 'robcruz'
            const engineer = new Engineer(name, id, email, id);

            // Assert
            expect(engineer.getId()).toEqual(id)
        })
    });

    describe("getEmail", () => {
        it("should return Email", () => {
            // Arrange
            const name = 'Dev Queen';
            const id = 3;
            const email = "alekseicruz@gmail.com"
            const github = 'robcruz'
            const engineer = new Engineer(name, id, email, email);

            // Assert
            expect(engineer.getEmail()).toEqual(email)
        })
    });

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


