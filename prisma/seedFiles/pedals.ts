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
    throttle_sensor: SensorType.HALL,
    brake_sensor: SensorType.HYDRAULIC_PRESSURE,
    brake_sensor_load_max: 180,
    brake_sensor_load_unit: ForceUnit.KG,
    clutch_sensor: SensorType.NA,
    heel_plate_included: false,
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
    throttle_sensor: SensorType.HALL,
    brake_sensor: SensorType.LOAD_CELL,
    brake_sensor_load_max: 100,
    brake_sensor_load_unit: ForceUnit.KG,
    clutch_sensor: SensorType.HALL,
    heel_plate_included: true,
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
    throttle_sensor: SensorType.LOAD_CELL,
    brake_sensor: SensorType.LOAD_CELL,
    brake_sensor_load_max: 150,
    brake_sensor_load_unit: ForceUnit.KG,
    clutch_sensor: SensorType.LOAD_CELL,
    heel_plate_included: false,
    platforms: [
      'PC',
    ],
    notes: [
      'Single pedal',
    ]
  },
]

module.exports = pedalSeeds