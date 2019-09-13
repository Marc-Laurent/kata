const router = require('express').Router()
const DictionaryReplacer = require('../dictionary/DictionaryReplacer')
let dictionaryReplace = new DictionaryReplacer()

router.get("/dictionary", (req, res) => {
    res.send("API - Dictionary")
})

router.post("/dictionary/replacer", (req, res) => dictionaryReplace.replaceAllRequest(req, res) )

module.exports = router