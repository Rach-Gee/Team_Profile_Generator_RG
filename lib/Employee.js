class Employee {
    constructor(id, name, email,) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

Employee.prototype.getRole = function () {
    return 'Employee'
}

Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getID = function () {
    return this.id;
}

Employee.prototype.getEmail = function () {
    return this.email;
}


module.exports = Employee;