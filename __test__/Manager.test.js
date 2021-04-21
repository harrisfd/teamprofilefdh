const Manager = require("../lib/Manager")

test("getName returns employee name", ()=>{
    const sample=new Manager("Felicia","1234","fharrisfoster@gmail.com")
    expect(sample.getName()).toBe("Felicia")   
})
