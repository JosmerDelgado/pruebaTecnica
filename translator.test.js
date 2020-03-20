const translator = require('./translator.js');
describe("translate from english to PigLatin", ()=>{
    it("translate from hello, to ellohay",()=>{
        const translate = translator("hello")
        expect(translate).toBe('ellohay')
    })
    it("translate from hello world, to ellohay orldway",()=>{
        const translate = translator("hello world")
        expect(translate).toBe('ellohay orldway')
    })
    it("translate from hello world, to ellohay orldway",()=>{
        const translate = translator("Hello World")
        expect(translate).toBe('Ellohay Orldway')
    })    
    it("translate from hello world, to ellohay orldway",()=>{
        const translate = translator("Hello, world!")
        expect(translate).toBe('Ellohay, orldway!')
    })    
})