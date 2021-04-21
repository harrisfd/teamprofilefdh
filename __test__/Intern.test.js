const Intern = require("../lib/Intern")

test("getName returns employee name", ()=>{
    const sample=new Intern("Felicia","1234","fharrisfoster@gmail.com")
    expect(sample.getName()).toBe("Felicia")   
})
// test("getName returns employee name", () => {
//     const sample = new Intern("Felicia", "1234", "fharrisfoster@gmail.com")
//     expect(sample.getSchool()).toBe("school")
// })



// class Intern extends Employee {
//     constructor(name, id, email, school) {
//         super(name, id, email);
//         this.school =school
//         this.role = "Intern"
//     }
//     getSchool(){
//         return this.school
//     }