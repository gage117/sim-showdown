const { Brand } = require('@prisma/client')

const brandSeeds: Partial<typeof Brand> = [
  {
    name: 'Ascher Racing',
  },
  {
    name: 'Asetek',
  },
  {
    name: 'Cube Controls',
  },
  {
    name: 'Fanatec',
  },
  {
    name: 'Gomez Sim Industries',
  },
  {
    name: 'Heusinkveld',
  },
  {
    name: 'Logitech',
  },
  {
    name: 'Moza',
  },
  {
    name: 'Simagic',
  },
  {
    name: 'Simucube',
  },
  {
    name: 'Thrustmaster',
  }
]

module.exports = brandSeeds