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

```python
const DictionaryReplacer =  require("../api/dictionary/DictionaryReplacer")

const dictionaryReplacer = new DictionaryReplacer("expression": "\$test\$", "dict": { "test": "success" })
dictionaryReplacer.replacerAll()

# or

let dictionaryReplacer = new DictionaryReplacer("expression": "\$test\$", "dict": { "test": "success" })
dictionaryReplacer.properties({
    "expression": "\$test\$", 
    "dict": { "test": "success" }
})
dictionaryReplacer.replacerAll()

```