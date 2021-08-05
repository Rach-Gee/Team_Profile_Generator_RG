const Employee = require('./Employee')

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)

        this.officeNumber = officeNumber
    }
}

Manager.prototype.getRole = function () {
    return 'Manager'
}

Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber
}

module.exports = Manager