//test to create engineer object
//test to functionality of github
//test get role property

const Engineer = require("../lib/Engineer")


test("getName returns employee name", () => {
    const sample = new Engineer("Felicia", "1234", "fharrisfoster@gmail.com", "harrisfd")
    expect(sample.getGithub()).toBe("harrisfd")
})
