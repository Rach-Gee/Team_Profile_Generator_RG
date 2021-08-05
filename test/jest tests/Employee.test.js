const Employee = require("./../../lib/Employee");

function makeEmployee(
    id = 123, 
    name = 'Employee', 
    email = 'employee@mail.com'
    ) {
    return new Employee(id, name, email);
}

describe("Employee", () => {

    it("should contain the correct fields", () => {
        const id = 123
        const name = 'Employee'
        const email = 'employee@mail.com'
        const employee = makeEmployee(id, name, email);

        expect(employee.id).toEqual(id);
        expect(employee.name).toEqual(name);
        expect(employee.email).toEqual(email);
    });


    it('should return employee when getRole() is called', () => {
        const employee = makeEmployee();
        const expected = 'Employee'
        expect(employee.getRole()).toEqual(expected);
    })

    it('should return email when getID() is called', () => {
        const expected = 123     
        const employee = makeEmployee(expected);

        expect(employee.getID()).toEqual(expected);
    })

    it('should return name when getName() is called', () => {
        const expected = 'Employee'
        const employee = makeEmployee(123, expected);
        expect(employee.getName()).toEqual(expected);
    })

    it('should return email when getEmail() is called', () => {
        const expected = 'Employee@mail.com'      
        const employee = makeEmployee(123, "Employee", expected);

        expect(employee.getEmail()).toEqual(expected);
    })

})
