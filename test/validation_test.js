const chai = require('chai')
const chaiJSON = require('./support/ajv')
const expect = chai.expect

chai.use(chaiJSON)

describe('authentication', function () {
  const authSchema = require('../schema/authentication')
  const authPromo = require('../data/authentication')

  it('is valid', function () {
    expect(authPromo).to.validateWithSchema(authSchema)
  })
})

describe('loggedIn', function () {
  const promoWithCaption = require('../schema/promoWithCaption')
  const loggedInPromo = require('../data/loggedIn')

  it('is valid', function () {
    expect(loggedInPromo).to.validateWithSchema(promoWithCaption)
  })
})
