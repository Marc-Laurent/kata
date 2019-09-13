const DictionaryReplacer =  require("../api/dictionary/DictionaryReplacer")
let dictionaryReplacer = new DictionaryReplacer()

/** TEST WITHOUT ERROR
 * 
 * TEST 1 : Replace simple => replace one definition
 * TEST 2 : temporary here comes the name John Doe => replace multiple definitions
 * 
*/

describe("All test with good parameters", () => {
    
    test("Replace simple", () => {
        dictionaryReplacer.properties = { "expression": "\$test\$", "dict": { "test": "success" }}

        expect(dictionaryReplacer.replacerAll).toBe("success")
    })

    test("temporary here comes the name John Doe", () => {
        dictionaryReplacer.properties = { "expression": "\$temp\$ here comes the name \$name\$", "dict": { "temp": "temporary", "name": "John Doe" }}
        
        expect(dictionaryReplacer.replacerAll).toBe("temporary here comes the name John Doe")
    })
})

/** TEST WITH ERROR
 *
 * TEST 1 : String empty 
 * TEST 2 : Dictionary empty 
 * TEST 3 : First parameter undefined
 * TEST 4 : Last parameter undefined 
 * TEST 5 : All parameters undefined
 * TEST 6 : First parameters bad format
 * TEST 7 : Last parameters bad format
 * TEST 8 : All parameters bad format
 * 
*/

describe("All test with wrong parameters", () => {
    const error_format = {
        "all": new Error("Properties wrong format. You need 2 params : expression: '\\\$name\\\$', dict: {'name': 'Joe'}"),
        "expression": new Error("The expression property wrong format. You need 2 params : expression: '\\\$name\\\$', dict: {'name': 'Joe'}"),
        "dict": new Error("The dict property wrong format. You need 2 params : expression: '\\\$name\\\$', dict: {'name': 'Joe'}")
    }

    test("String empty", () => {
        dictionaryReplacer.properties = { "expression": "", "dict": { "temp": "temporary", "name": "John Doe" }}

        expect(dictionaryReplacer.replacerAll).toBe("")
    })

    test("Dictionary empty", () => {
        dictionaryReplacer.properties = { "expression": "\$temp\$ here comes the name \$name\$", "dict": {}}

        expect(dictionaryReplacer.replacerAll).toBe("\$temp\$ here comes the name \$name\$")
    })

    test("First parameter undefined", () => {
        dictionaryReplacer.properties = { "expression": null, "dict": { "test": "success" }}

        expect(dictionaryReplacer.replacerAll).toBe("")
    })

    test("Last parameter undefined", () => {
        dictionaryReplacer.properties = { "expression": "\$test\$", "dict": null}

        expect(dictionaryReplacer.replacerAll).toBe("\$test\$")
    })

    test("All parameters undefined", () => {
        dictionaryReplacer.expression = null

        expect(dictionaryReplacer.replacerAll).toBe("")
    })

    test("First parameter bad format", () => {
        dictionaryReplacer.dict = 3

        expect(dictionaryReplacer.replacerAll).toMatchObject(error_format["dict"])
    })
    test("Last parameter bad format", () => {
        dictionaryReplacer.properties = { "expression": "\$test\$", "dict": []}

        expect(dictionaryReplacer.replacerAll).toMatchObject(error_format["dict"])
    })

    test("All parameters bad format", () => {
        dictionaryReplacer.properties = { "expression": [], "dict": 2}

        expect(dictionaryReplacer.replacerAll).toMatchObject(error_format["all"])
    })
})