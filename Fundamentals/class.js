var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.name = name;
        this.address = address;
    }
    Object.defineProperty(Employee.prototype, "empId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getNameWithAddress = function () {
        return "".concat(this.name, " stays at ").concat(this.address);
    };
    Employee.getEmployeeCount = function () {
        return 50;
    };
    return Employee;
}());
// If we Extending class so we need to add super
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, adddress) {
        return _super.call(this, id, name, adddress) || this;
    }
    return Manager;
}(Employee));
var john = new Employee(1, "John", "Highway 71");
var address = john.getNameWithAddress();
// john.id = 1;
// john.name = "Vidusha";
// john.address = "Highway 71";
var mike = new Manager(2, "Vidusha", "Sharjah");
john.empId = 100;
console.log(john.empId);
console.log("How to access Employee Count Static Method", Employee.getEmployeeCount);
console.log(john);
console.log(address);
console.log("-------------------");
console.log(mike);
