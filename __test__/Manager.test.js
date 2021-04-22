const Manager = require("../lib/Manager")

test("getofficenumber returns employee office number", ()=>{
    const sample=new Manager("Felicia","1234","fharrisfoster@gmail.com","415-222-2222")
    expect(sample.getofficenumber()).toBe("415-222-2222")   
})
