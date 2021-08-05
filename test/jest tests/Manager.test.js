const Manager = require("./../../lib/manager");

function makemanager(
    id = 123, 
    name = 'Manager', 
    email = 'manager@mail.com',
    officeNumber = 'UWA'
    ) {
    return new Manager(id, name, email, officeNumber);
}

describe("Manager", () => {

    it("should contain the correct fields", () => {
        const id = 123
        const name = 'Manager'
        const email = 'manager@mail.com'
        const officeNumber = 'manager.officeNumber'


        const manager = makemanager(id, name, email, officeNumber);

        expect(manager.id).toEqual(id);
        expect(manager.name).toEqual(name);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
    });


    it('should return manager when getRole() is called', () => {
        const manager = makemanager();
        const expected = 'Manager'
        expect(manager.getRole()).toEqual(expected);
    })

    it('should return email when getID() is called', () => {
        const expected = 123     
        const manager = makemanager(expected);

        expect(manager.getID()).toEqual(expected);
    })

    it('should return name when getName() is called', () => {
        const expected = 'manager'
        const manager = makemanager(123, expected);
        expect(manager.getName()).toEqual(expected);
    })

    it('should return email when getEmail() is called', () => {
        const expected = 'manager@mail.com'      
        const manager = makemanager(123, "manager", expected);

        expect(manager.getEmail()).toEqual(expected);
    })

    it('should return email when getOfficeNumber() is called', () => {
        const expected = 'UWA'      
        const manager = makemanager(123, "manager", 'email', expected);

        expect(manager.getOfficeNumber()).toEqual(expected);
    })

})
