const sharedSchemas = require('./shared')
const avatarObject = sharedSchemas.avatarObject
const assetUrlObject = sharedSchemas.assetUrlObject

module.exports = {
  title: 'Logged In Promo',
  id: 'loggedIn',
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'array',
  minItems: 1,
  maxItems: 20,
  items: { $ref: '#/definitions/loggedInPromo' },
  definitions: {
    loggedInPromo: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        caption: { type: 'string' },
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
        cta: {
          type: 'object',
          properties: {
            href: { type: 'string', format: 'uri' },
            caption: { type: 'string' },
          },
        },
      },
      additionalProperties: false,
      required: ['username', 'caption', 'avatar', 'coverImage'],
    },
  },
}
