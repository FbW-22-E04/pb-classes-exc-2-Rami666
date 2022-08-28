
class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePayslip() {
    let monthlySalary = this.salary / 12;
    return `Employee ID : ${this.id}
      Name : ${this.firstName} ${this.lastName}
      Social Security Number : ${this.socialSecurityNumber}
      Pay : $ ${monthlySalary}`;
  }
}

