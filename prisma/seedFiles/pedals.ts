import type { Prisma } from '@prisma/client'
import { PedalType, SensorType, ForceUnit } from '@prisma/client';
import prisma from './prisma.ts';
import { slugifyForDB } from './seedUtils.ts';

function PedalSeed(pedal: Omit<Prisma.PedalCreateInput, 'slug'>): Prisma.PedalCreateInput {
  if (!pedal.brand.connect) throw new Error('PedalSeed requires a brand.connect property')
  return {
    ...pedal,
    slug: slugifyForDB(`${pedal.model}_${pedal.brand.connect.name}`)
  }
}

const pedalSeeds: Prisma.PedalCreateInput[] = [
  // Asetek
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    }
  }),
  // Fanatec
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    }
  }),
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    }
  }),
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    }
  }),
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    },
    notes: [
      'Vibration motor on Throttle and Brake',
    ]
  }),
  // Logitech
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    }
  }),
  // Simucube
  PedalSeed({
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
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    },
    notes: [
      'Single pedal',
    ]
  }),
]

async function seedPedals() {
  console.log('Seeding pedals...');
  try {
    for (const pedal of pedalSeeds) {
      await prisma.pedal.upsert({
        where: { slug: pedal.slug },
        update: {
          ...pedal
        },
        create: {
          ...pedal
        },
      })
    }
    console.log('Pedals seeded!')
  } catch (error) {
    console.error(error)
  }
}

export default seedPedals