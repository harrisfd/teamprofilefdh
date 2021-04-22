const Intern = require("../lib/Intern")

test("getSchool returns employee school", () => {
    const sample = new Intern("Felicia", "1234", "fharrisfoster@gmail.com", "Berkeley")
    expect(sample.getSchool()).toBe("Berkeley")
})



