const Ajv = require('ajv')

module.exports = function (chai, utils) {
  const Assertion = chai.Assertion
  const addProperty = utils.addProperty
  const overwriteMethod = utils.overwriteMethod

  const ajv = new Ajv()
  addProperty(chai, 'ajv', function () {
    return ajv
  })

  overwriteMethod(Assertion.prototype, 'validateWithSchema', function () {
    return function (schema) {
      const ajv = chai.ajv
      const isValid = ajv.validate(schema, this._obj)
      this.assert(isValid, ajv.errorsText(ajv.errors, {dataVar: 'promos'}), 'Should not be valid!')
    }
  })
}
