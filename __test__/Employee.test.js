const Employee = require("../lib/Employee")

test("create employee object", ()=> {
    const sample=new Employee("Felicia","1234","fharrisfoster@gmail.com")
    expect(typeof(sample)).toBe("object")
})

test("getName returns employee name", ()=>{
    const sample=new Employee("Felicia","1234","fharrisfoster@gmail.com")
    expect(sample.getName()).toBe("Felicia")   
})

test("getId returns employee id", ()=>{
    const sample=new Employee("Felicia","1234","fharrisfoster@gmail.com")
    expect(sample.getId()).toBe("1234")
})

test("getEmail returns employee email", ()=>{
    const sample=new Employee("Felicia","1234","fharrisfoster@gmail.com")
    expect(sample.getEmail()).toBe("fharrisfoster@gmail.com")
})

test("getRole returns employee role", ()=>{
    const sample=new Employee("Felicia","1234","fharrisfoster@gmail.com")
    expect(sample.getRole()).toBe("employee")
})