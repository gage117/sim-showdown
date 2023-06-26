import type { Pedal } from '@prisma/client';
import type { SeedPartial } from './seedPartial';
import { PedalType, ForceUnit, SensorType } from '@prisma/client'

type PedalSeed = Partial<Pedal> & SeedPartial

const pedalSeeds: PedalSeed[] = [
  // Asetek
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
  // Fanatec
  {
    model: 'CSL',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    type: PedalType.THROTTLE_BRAKE,
    price: 79.95,
    throttle_sensor: SensorType.HALL,
    brake_sensor: SensorType.HALL,
    brake_sensor_load_max: 0,
    brake_sensor_load_unit: ForceUnit.NA,
    clutch_sensor: SensorType.NONE,
    heel_plate_included: true,
    platforms: [
      'PC',
      'Xbox',
      'Playstation'
    ]
  },
  {
    model: 'CSL LC',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    type: PedalType.THREE_PEDAL,
    price: 199.95,
    throttle_sensor: SensorType.HALL,
    brake_sensor: SensorType.LOAD_CELL,
    brake_sensor_load_max: 0,
    brake_sensor_load_unit: ForceUnit.NA,
    clutch_sensor: SensorType.HALL,
    heel_plate_included: true,
    platforms: [
      'PC',
      'Xbox',
      'Playstation'
    ]
  },
  {
    model: 'CSL Elite V2',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    type: PedalType.THREE_PEDAL,
    price: 299.95,
    throttle_sensor: SensorType.HALL,
    brake_sensor: SensorType.LOAD_CELL,
    brake_sensor_load_max: 90,
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
    model: 'ClubSport V3',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    type: PedalType.THREE_PEDAL,
    price: 399.95,
    throttle_sensor: SensorType.HALL,
    brake_sensor: SensorType.LOAD_CELL,
    brake_sensor_load_max: 90,
    brake_sensor_load_unit: ForceUnit.KG,
    clutch_sensor: SensorType.HALL,
    heel_plate_included: true,
    platforms: [
      'PC',
      'Xbox',
      'Playstation'
    ],
    notes: [
      'Vibration motor on Throttle and Brake',
    ]
  },
  // Logitech
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
  // Simucube
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

export default pedalSeeds