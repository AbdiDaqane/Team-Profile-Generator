const Employee = require("../lib/Employee");

const name = "James";
const id = "3034d";
const email = "example@gmail.com";
const employee = new Employee(name, id, email);

describe("Employee Class", () => {
  describe("Initialization", () => {
    it("Create a employee class with correct properties", () => {
      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toBe(name);
      expect(employee.id).toBe(id);
      expect(employee.email).toBe(email);
    });
  });
  describe("getName", () => {
    it("return Employee Name", () => {
      expect(employee.getName()).toBe(employee.name);
    });
  });
  describe("getID", () => {
    it("return Employee ID", () => {
      expect(employee.getId()).toBe(employee.id);
    });
  });
  describe("getEmail", () => {
    it("return Employee Email", () => {
      expect(employee.getEmail()).toBe(employee.email);
    });
  });
  describe("getRole", () => {
    it("return Employee Name", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });
});