class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee1 = new Employee("John Doe", "Manager", 5000);
  
  // Call the getSalary method
  console.log(employee1.getSalary());
  