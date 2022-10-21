const Employee = ("../lib/Employee.js");

describe("getters", () => {
    const name = "kevin Durant";
    const id = "33";
    const email = "Kevin.Durant@gmail.com";
    const role = "Employee";

    const testEmployee = new Employee(id,name,email);

    it ("should return the Employee name when requested")
    expect(testEmployee.getName().tobe(id));

});

it("should return the Employee is when requested", () =>{
    expect(testEmployee.getId()).toBe(id);
});