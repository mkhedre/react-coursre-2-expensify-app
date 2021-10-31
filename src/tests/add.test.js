
const generatingGreeting =(name='ahmed')=> `hello ${name}!`

test("geneate greet name",()=>{
    const myname = generatingGreeting('mostafa')
    expect(myname).toBe('hello mostafa!')

})
test("geneate no name",()=>{
    const myname = generatingGreeting()
    expect(myname).toBe('hello ahmed!')

})
