# kata

Kata exercise

#### Link

[KataDictionaryReplacer](http://codingdojo.org/kata/DictionaryReplacer/)

#### API
[Nodejs](https://nodejs.org/en/docs/), [Mongoose](https://mongoosejs.com/docs/), [Express](https://expressjs.com)

## Project setup
```
npm install
```

# Project start
```
npm start ${env}
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