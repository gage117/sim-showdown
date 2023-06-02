const { Platform } = require('@prisma/client')

const platformSeeds: Partial<typeof Platform>[] = [
  {
    name: 'PC',
  },
  {
    name: 'Playstation',
  },
  {
    name: 'Xbox',
  },
]

module.exports = platformSeeds