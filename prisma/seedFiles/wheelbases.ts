import { ForceFeedbackType } from '@prisma/client'
import type { Prisma } from '@prisma/client'
import prisma from './prisma.ts';
import { slugifyForDB } from './seedUtils.ts';

function WheelbaseSeed(wheelbase: Omit<Prisma.WheelbaseCreateInput, 'slug' | 'brand'> & { brand: string }): Prisma.WheelbaseCreateInput {
  if (!wheelbase.brand) throw new Error('WheelbaseSeed requires a brand property')
  return {
    ...wheelbase,
    brand: {
      connectOrCreate: {
        where: { name: wheelbase.brand },
        create: {
          name: wheelbase.brand,
          slug: slugifyForDB(wheelbase.brand)
        },
      },
    },
    slug: slugifyForDB(`${wheelbase.model}_${wheelbase.brand}`)
  }
}

const wheelbaseSeeds: Prisma.WheelbaseCreateInput[] = [
  WheelbaseSeed({
    model: 'Pro',
    brand: 'Fanatec',
    price: 999.99,
    torque: 10,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: false,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Playstation'},
        { name: 'Xbox'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: true,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'CSL DD (5Nm)',
    brand: 'Fanatec',
    price: 349.95,
    torque: 5,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Xbox'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'CSL DD (8Nm)',
    brand: 'Fanatec',
    price: 499.95,
    torque: 8,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Xbox'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'GT DD (8Nm)',
    brand: 'Fanatec',
    price: 599.95,
    torque: 8,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Playstation'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'Podium DD1',
    brand: 'Fanatec',
    price: 1199.95,
    torque: 20,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Xbox'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'Podium DD2',
    brand: 'Fanatec',
    price: 1499.95,
    torque: 25,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
        { name: 'Xbox'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'Simucube 2 Sport',
    brand: 'Simucube',
    price: 1199.00,
    torque: 17,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'Simucube 2 Pro',
    brand: 'Simucube',
    price: 1379.00,
    torque: 25,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'Simucube 2 Ultimate',
    brand: 'Simucube',
    price: 2949.00,
    torque: 32,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'R5',
    brand: 'Moza',
    price: 319.00,
    torque: 5,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'R9',
    brand: 'Moza',
    price: 439.00,
    torque: 9,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'R16',
    brand: 'Moza',
    price: 899.00,
    torque: 16,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
  WheelbaseSeed({
    model: 'R21',
    brand: 'Moza',
    price: 1099.00,
    torque: 21,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: {
      connect: [
        { name: 'PC'},
      ]
    },
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  }),
]

async function seedWheelbases() {
  console.log('Seeding wheelbases...');
  try {
    for (const wheelbase of wheelbaseSeeds) {
      await prisma.wheelbase.upsert({
        where: { slug: wheelbase.slug },
        update: {
          ...wheelbase
        },
        create: {
          ...wheelbase
        },
      })
    }
    console.log('Wheelbases seeded!')
  } catch (error) {
    console.error(error)
  }
}

export default seedWheelbases;