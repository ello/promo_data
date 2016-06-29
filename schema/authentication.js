const assetUriRules = [
  { type: 'string', format: 'uri' },
  { pattern: 'assets\\.ello\\.co' }
]

function assetUrlObject(extraRules) {
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

module.exports = {
  title: 'Authentication Promo',
  id: 'authentication',
  $schema: 'http://json-schema.org/draft-04/schema#',
  definitions: {
    uriString: {
      type: 'string',
      format: 'uri'
    },
    assetUri: {
      allOf: [
        { $ref: '#/definitions/uriString' },
        { pattern: 'assets\\.ello\\.co' }
      ]
    },
    authenticationPromo: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        avatar: {
          type: 'object',
          properties: {
            regular: assetUrlObject([
              { pattern: 'user' },
              { pattern: 'avatar' },
              { pattern: 'ello-regular' }
            ])
          }
        },
        coverImage: {
          type: 'object',
          properties: {
            hdpi: assetUrlObject([
              { pattern: 'ello-hdpi-' }
            ]),
            xhdpi: assetUrlObject([
              { pattern: 'ello-xhdpi-' }
            ]),
            optimized: assetUrlObject([
              { pattern: 'optimized' }
            ])
          }
        }
      },
      additionalProperties: false,
      required: ['avatar', 'username', 'coverImage']
    }
  },
  type: 'array',
  minItems: 1,
  maxItems: 20,
  items: { $ref: '#/definitions/authenticationPromo' }
}
