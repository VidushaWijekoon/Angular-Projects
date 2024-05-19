interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee {
  //   id!: number;
  //   name!: string;
  //   address!: string;
  private id: number;
  protected name: string;
  address: string;

  get empId(): number {
    return this.id;
  }

  set empId(id: number) {
    this.id = id;
  }

  constructor(id: number, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }

  static getEmployeeCount(): number {
    return 50;
  }
}

// If we Extending class so we need to add super
class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, adddress);
  }
}

let john = new Employee(1, "John", {
  street: "ABC",
  city: "Sharjah",
  state: "Sharjah",
  pin: "12345",
});
let address = john.getNameWithAddress();
// john.id = 1;
// john.name = "Vidusha";
// john.address = "Highway 71";
let mike = new Manager(2, "Vidusha", {
  street: "ABC",
  city: "Sharjah",
  state: "Sharjah",
  pin: "12345",
});
john.empId = 100;
console.log(john.empId);

console.log(
  "How to access Employee Count Static Method",
  Employee.getEmployeeCount
);
console.log(john);
console.log(address);
console.log("-------------------");
console.log(mike);
