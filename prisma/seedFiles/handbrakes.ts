import type { Prisma } from '@prisma/client';
import { HandbrakeMountingPosition, SensorType } from '@prisma/client'
import prisma from './prisma.ts';
import { slugifyForDB } from './seedUtils.ts';

function HandbrakeSeed(handbrake: Omit<Prisma.HandbrakeCreateInput, 'slug' | 'brand'> & { brand: string }): Prisma.HandbrakeCreateInput {
  if (!handbrake.brand) throw new Error('HandbrakeSeed requires a brand property')
  return {
    ...handbrake,
    brand: {
      connectOrCreate: {
        where: { name: handbrake.brand },
        create: {
          name: handbrake.brand,
          slug: slugifyForDB(handbrake.brand)
        },
      },
    },
    slug: slugifyForDB(`${handbrake.model}_${handbrake.brand}`)
  }
}

const handbrakeSeeds: Prisma.HandbrakeCreateInput[] = [
  HandbrakeSeed({
    model: 'ClubSport Handbrake V1.5',
    brand: 'Fanatec',
    price: 129.99,
    mountingPosition: HandbrakeMountingPosition.VERTICAL_HORIZONTAL,
    sensorType: SensorType.POTENTIOMETER,
    adjustableAngle: true,
    adjustableTravel: false,
    adjustablePressure: false,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Playstation'},
        { name: 'Xbox'},  
      ]
    },
    notes: [
      'Requires ClubSport USB Adapter to connect via USB',
    ]
  }),
  HandbrakeSeed({
    model: 'XB1 Handbrake',
    brand: 'Sim-Lab',
    price: 219.00,
    sensorType: SensorType.LOAD_CELL,
    adjustableAngle: false,
    adjustableTravel: false,
    platforms: {
      connect: [
        { name: 'PC'}
      ]
    },
    notes: [
      '150kg load cell',
    ]
  }),
  HandbrakeSeed({
    model: 'Sim Handbrake V2',
    brand: 'Heusinkveld',
    price: 379.99,
    mountingPosition: HandbrakeMountingPosition.VERTICAL_HORIZONTAL,
    sensorType: SensorType.LOAD_CELL,
    adjustableAngle: true,
    adjustableTravel: true,
    adjustablePressure: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    notes: [
      '120kg load cell',
    ]
  }),
  HandbrakeSeed({
    model: 'HPB Handbrake',
    brand: 'Moza',
    price: 99.00,
    mountingPosition: HandbrakeMountingPosition.VERTICAL_HORIZONTAL,
    sensorType: SensorType.HALL,
    adjustableAngle: true,
    adjustableTravel: true,
    adjustablePressure: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
  }),
  HandbrakeSeed({
    model: 'Evo Handbrake',
    brand: 'Meca',
    price: 248.00,
    mountingPosition: HandbrakeMountingPosition.VERTICAL_HORIZONTAL,
    sensorType: SensorType.HALL,
    adjustableAngle: true,
    adjustableTravel: true,
    adjustablePressure: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
  }),
]

async function seedHandbrakes() {
  console.log('Seeding handbrakes...');
  try {
    for (const handbrake of handbrakeSeeds) {
      await prisma.handbrake.upsert({
        where: { slug: handbrake.slug },
        update: {
          ...handbrake
        },
        create: {
          ...handbrake
        },
      })
    }
    console.log('Handbrakes seeded!')
  } catch (error) {
    console.error(error)
  }
}

export default seedHandbrakes