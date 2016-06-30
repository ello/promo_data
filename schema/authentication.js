const sharedSchemas = require('./shared')
const assetUrlObject = sharedSchemas.assetUrlObject
const avatarObject = sharedSchemas.avatarObject

module.exports = {
  title: 'Authentication Promo',
  id: 'authentication',
  $schema: 'http://json-schema.org/draft-04/schema#',
  definitions: {
    uriString: {
      type: 'string',
      format: 'uri',
    },
    assetUri: {
      allOf: [
        { $ref: '#/definitions/uriString' },
        { pattern: 'assets\\.ello\\.co' },
      ],
    },
    authenticationPromo: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        avatar: avatarObject,
        coverImage: {
          type: 'object',
          properties: {
            hdpi: assetUrlObject([
              { pattern: 'ello-hdpi-' },
            ]),
            xhdpi: assetUrlObject([
              { pattern: 'ello-xhdpi-' },
            ]),
            optimized: assetUrlObject([
              { pattern: 'optimized' },
            ]),
          },
          required: ['hdpi', 'xhdpi', 'optimized'],
        },
      },
      additionalProperties: false,
      required: ['avatar', 'username', 'coverImage'],
    },
  },
  type: 'array',
  minItems: 1,
  maxItems: 20,
  items: { $ref: '#/definitions/authenticationPromo' },
}
