const Engineer = require("./../../lib/Engineer");

function makeEngineer(
    id = 123, 
    name = 'Engineer', 
    email = 'Engineer@mail.com',
    gitHub = 'Engineer.Github'
    ) {
    return new Engineer(id, name, email, gitHub);
}

describe("Engineer", () => {

    it("should contain the correct fields", () => {
        const id = 123
        const name = 'Engineer'
        const email = 'Engineer@mail.com'
        const gitHub = 'Engineer.Github'


        const engineer = makeEngineer(id, name, email, gitHub);

        expect(engineer.id).toEqual(id);
        expect(engineer.name).toEqual(name);
        expect(engineer.email).toEqual(email);
        expect(engineer.gitHub).toEqual(gitHub);
    });


    it('should return Engineer when getRole() is called', () => {
        const engineer = makeEngineer();
        const expected = 'Engineer'
        expect(engineer.getRole()).toEqual(expected);
    })

    it('should return email when getID() is called', () => {
        const expected = 123     
        const engineer = makeEngineer(expected);

        expect(engineer.getID()).toEqual(expected);
    })

    it('should return name when getName() is called', () => {
        const expected = 'Engineer'
        const engineer = makeEngineer(123, expected);
        expect(engineer.getName()).toEqual(expected);
    })

    it('should return email when getEmail() is called', () => {
        const expected = 'Engineer@mail.com'      
        const engineer = makeEngineer(123, "Engineer", expected);

        expect(engineer.getEmail()).toEqual(expected);
    })

    it('should return email when getGitHub() is called', () => {
        const expected = 'Engineer.Github'      
        const engineer = makeEngineer(123, "Engineer", 'email', expected);

        expect(engineer.getGitHub()).toEqual(expected);
    })

})
