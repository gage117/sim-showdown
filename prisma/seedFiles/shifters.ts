import type { Prisma } from '@prisma/client';
import { ShifterType, ShifterSpeedType, ShifterThrowType, SensorType } from '@prisma/client'
import prisma from './prisma.ts';
import { slugifyForDB } from './seedUtils.ts';

function ShifterSeed(shifter: Omit<Prisma.ShifterCreateInput, 'slug'>): Prisma.ShifterCreateInput {
  if (!shifter.brand.connect) throw new Error('ShifterSeed requires a brand.connect property')
  return {
    ...shifter,
    slug: slugifyForDB(`${shifter.model}_${shifter.brand.connect.name}`)
  }
}

const shifterSeeds: Prisma.ShifterCreateInput[] = [
  ShifterSeed({
    model: 'Driving Force Shifter',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
    price: 59.99,
    type: ShifterType.HPATTERN,
    speeds: [
      ShifterSpeedType.SIX_PLUS_REVERSE
    ],
    proprietary: true,
    throw: [
      ShifterThrowType.SHORT
    ],
    sensorType: SensorType.POTENTIOMETER,
    platforms: {
      connect: [
          { name: 'PC'},
          { name: 'Playstation'},
          { name: 'Xbox'},  
      ]
    },
    notes: [
      'Proprietary to Logitech G923, G29 and G920 wheels',
    ]
  }),
  ShifterSeed({
    model: 'TH8A',
    brand: {
      connect: {
        name: 'Thrustmaster',
      },
    },
    price: 199.99,
    type: ShifterType.SEQUENTIAL_HPATTERN,
    speeds: [
      ShifterSpeedType.SEVEN_PLUS_REVERSE,
      ShifterSpeedType.SEQUENTIAL
    ],
    proprietary: false,
    throw: [
      ShifterThrowType.SHORT,
    ],
    sensorType: SensorType.HALL,
    platforms: {
      connect: [
          { name: 'PC'},
          { name: 'Playstation'},
          { name: 'Xbox'},  
      ]
    },
  }),
  ShifterSeed({
    model: 'ClubSport Shifter SQ V 1.5',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 259.95,
    type: ShifterType.SEQUENTIAL_HPATTERN,
    speeds: [
      ShifterSpeedType.SEVEN_PLUS_REVERSE,
      ShifterSpeedType.SEQUENTIAL
    ],
    proprietary: false,
    throw: [
      ShifterThrowType.SHORT,
    ],
    sensorType: SensorType.NA,
    platforms: {
      connect: [
          { name: 'PC'},
          { name: 'Playstation'},
          { name: 'Xbox'},  
      ]
    },
    notes: [
      'Requires ClubSport USB Adapter to connect via USB to PC',
    ]
  })
]

async function seedWShifters() {
  console.log('Seeding shifters...');
  try {
    for (const shifter of shifterSeeds) {
      await prisma.shifter.upsert({
        where: { slug: shifter.slug },
        update: {
          ...shifter
        },
        create: {
          ...shifter
        },
      })
    }
    console.log('Shifters seeded!')
  } catch (error) {
    console.error(error)
  }
}

export default seedWShifters