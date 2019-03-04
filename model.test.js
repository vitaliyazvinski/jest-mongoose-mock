const Test = require('./model')

jest.mock('./model', () => {
    return {
        findOne: jest.fn(() => Promise.resolve(""))
    }
})

test("test", async () => {
    var result = await Test.findOne();

    expect(result).toBe("");
})