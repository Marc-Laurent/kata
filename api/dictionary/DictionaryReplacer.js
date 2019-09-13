'use strict'
/**
 *
 * CLASS DictionaryReplacer
 *
 * @param {string} _string The first param is a string
 * @param {object} _dict he second param is a dictionary
 * The others isn't necessary
 **/

class DictionaryReplacer {

    constructor(expression, dict, ...properties) {
        this._properties = properties
        this._expression = expression || ""
        this._dict = dict || {}
        this._replacerAll = this.replaceAll(this._expression, this._dict)
    }
    
    get properties() { // GET ALL Properties
        return this._properties
    }
    
    set properties(properties) { /*@param {Object} SET ALL Properties*/
        this._properties = properties
        this._expression = (properties && properties["expression"]) || ""
        this._dict = (properties && properties["dict"]) || {}
        this._replacerAll = this.replaceAll(this._expression, this._dict)
    } 

    get expression() { // GET expression Properties
        return this._expression
    }

    set expression(expression) { // SET expression Properties
        this._expression = expression || ""
        this._replacerAll = this.replaceAll(this._expression, this._dict)

    }

    get dict() { // GET dict property
        return this._dict
    }

    set dict(dict) { // SET dict property
        this._dict = dict || {}
        this._replacerAll = this.replaceAll(this._expression, this._dict)

    }

    get replacerAll() { // GET expression with the string complete parse with the dictionary
        return this._replacerAll
    }

    /**   LIST METHODS
    *
    ** @method replaceAll
    *** Description: Go through the entire dictionary and replace each word with the value corresponding to the key
        * The first : @param {String} expression
        * The Second : @param {Object} dict
    *
    */

    replaceAll(expression, dict) {
        try {
            if (typeof expression !== "string" && (typeof dict !== "object" || Array.isArray(dict))) throw new Error("Properties wrong format. You need 2 params : expression: '\\\$name\\\$', dict: {'name': 'Joe'}")
            if (typeof expression !== "string") throw new Error("The expression property wrong format. You need 2 params : expression: '\\\$name\\\$', dict: {'name': 'Joe'}")
            if (typeof dict !== "object" || Array.isArray(dict)) throw new Error("The dict property wrong format. You need 2 params : expression: '\\\$name\\\$', dict: {'name': 'Joe'}")
            
            Object.keys(dict).map( key => { expression = expression.replace(`\$${key}\$`, dict[key]) })

            return expression
        } catch (error) {
            return error
        }
    }
}

module.exports = DictionaryReplacer