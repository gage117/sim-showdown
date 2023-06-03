const { Wheel } = require('@prisma/client');

const wheelSeeds: Partial<typeof Wheel>[] = [
  {
    model: 'Podium Steering Wheel BMW M4 GT3',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    type: 'GT',
    price: 1499.95,
    diameter: 300,
    material: 'Carbon Fiber',
  }
]

module.exports = wheelSeeds