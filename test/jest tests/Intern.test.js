const Intern = require("./../../lib/Intern");

function makeIntern(
    id = 123, 
    name = 'Intern', 
    email = 'Intern@mail.com',
    school = 'UWA'
    ) {
    return new Intern(id, name, email, school);
}

describe("Intern", () => {

    it("should contain the correct fields", () => {
        const id = 123
        const name = 'Intern'
        const email = 'Intern@mail.com'
        const school = 'Intern.school'


        const intern = makeIntern(id, name, email, school);

        expect(intern.id).toEqual(id);
        expect(intern.name).toEqual(name);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    });


    it('should return Intern when getRole() is called', () => {
        const intern = makeIntern();
        const expected = 'Intern'
        expect(intern.getRole()).toEqual(expected);
    })

    it('should return email when getID() is called', () => {
        const expected = 123     
        const intern = makeIntern(expected);

        expect(intern.getID()).toEqual(expected);
    })

    it('should return name when getName() is called', () => {
        const expected = 'Intern'
        const intern = makeIntern(123, expected);
        expect(intern.getName()).toEqual(expected);
    })

    it('should return email when getEmail() is called', () => {
        const expected = 'Intern@mail.com'      
        const intern = makeIntern(123, "Intern", expected);

        expect(intern.getEmail()).toEqual(expected);
    })

    it('should return email when getSchool() is called', () => {
        const expected = 'UWA'      
        const intern = makeIntern(123, "Intern", 'email', expected);

        expect(intern.getSchool()).toEqual(expected);
    })

})
