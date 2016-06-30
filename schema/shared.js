const assetUriRules = [
  { type: 'string', format: 'uri' },
  { pattern: 'assets\\.ello\\.co' }
]

const assetUrlObject = function assetUrlObject(extraRules) {
  extraRules = extraRules || []
  return {
    type: 'object',
    properties: {
      url: {
        allOf: assetUriRules.concat(extraRules)
      }
    }
  }
}

const avatarObject = {
  type: 'object',
  properties: {
    regular: assetUrlObject([
      { pattern: 'user' },
      { pattern: 'avatar' },
      { pattern: 'ello-regular' }
    ])
  }
}

module.exports = {
  avatarObject,
  assetUrlObject
}
