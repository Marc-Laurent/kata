# kata

Kata exercise

#### Link

[KataDictionaryReplacer](http://codingdojo.org/kata/DictionaryReplacer/)

## Project setup
```
npm install
```

### Run your tests
```
npm test
```

## Usage

```javascript
const DictionaryReplacer =  require("../api/dictionary/DictionaryReplacer")

let dictionaryReplacer = new DictionaryReplacer("expression": "\$test\$", "dict": { "test": "success" })
dictionaryReplacer.replacerAll() # returns "success"

dictionaryReplacer.properties({
    "expression": "\$temp\$ here comes the name \$name\$", 
    "dict": { "temp": "temporary", "name": "John Doe" }
})
dictionaryReplacer.replacerAll() # returns "temporary here comes the name John Doe"
```