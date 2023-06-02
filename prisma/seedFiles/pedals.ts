const { Pedal, PedalType, SensorType, ForceUnit } = require('@prisma/client')

const pedalSeeds: typeof Pedal[] = [
  {
    model: 'Invicta',
    brand: {
      connect: {
        name: 'Asetek',
      },
    },
    type: PedalType.THROTTLE_BRAKE,
    price: 899.99,
    throttleSensor: SensorType.HALL,
    brakeSensor: SensorType.HYDRAULIC_PRESSURE,
    brakeSensorLoadMax: 180,
    brakeSensorLoadUnit: ForceUnit.KG,
    clutchSensor: SensorType.NA,
    heelPlateIncluded: false,
    platforms: [
      'PC',
    ]
  },
  {
    model: 'Pro',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
    type: PedalType.THREE_PEDAL,
    price: 349.99,
    throttleSensor: SensorType.HALL,
    brakeSensor: SensorType.LOAD_CELL,
    brakeSensorLoadMax: 100,
    brakeSensorLoadUnit: ForceUnit.KG,
    clutchSensor: SensorType.HALL,
    heelPlateIncluded: true,
    platforms: [
      'PC',
      'Xbox',
      'Playstation'
    ]
  },
  {
    model: 'ActivePedal',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
    type: PedalType.PROGRAMMABLE,
    price: 1959.99,
    throttleSensor: SensorType.LOAD_CELL,
    brakeSensor: SensorType.LOAD_CELL,
    brakeSensorLoadMax: 150,
    brakeSensorLoadUnit: ForceUnit.KG,
    clutchSensor: SensorType.LOAD_CELL,
    heelPlateIncluded: false,
    platforms: [
      'PC',
    ],
    notes: [
      'Single pedal',
    ]
  },
]

module.exports = pedalSeeds