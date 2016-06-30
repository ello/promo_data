const sharedSchemas = require('./shared')
const avatarObject = sharedSchemas.avatarObject
const assetUrlObject = sharedSchemas.assetUrlObject

module.exports = {
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
              { pattern: 'ello-hdpi-' }
            ]),
            xhdpi: assetUrlObject([
              { pattern: 'ello-xhdpi-' }
            ]),
            optimized: assetUrlObject([
              { pattern: 'optimized' }
            ])
          },
          required: ['hdpi', 'xhdpi', 'optimized'],
        }
      }
    }
  },
}
