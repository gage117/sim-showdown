import type { Prisma } from '@prisma/client'
import prisma from './prisma.ts';
import { slugifyForDB } from './seedUtils.ts';

function PlatformSeed(name: string): Prisma.PlatformCreateInput {
  return {
    name,
    slug: slugifyForDB(name)
  }
}

const platformSeeds: Prisma.PlatformCreateInput[] = [
  PlatformSeed('PC'),
  PlatformSeed('Playstation'),
  PlatformSeed('Xbox'),
]

async function seedPlatforms() {
  console.log('Seeding platforms...');
  try {
    for (const platform of platformSeeds) {
      await prisma.platform.upsert({
        where: { slug: platform.slug },
        update: {
          ...platform
        },
        create: {
          ...platform
        },
      })
    }
    console.log('Platforms seeded!')
  } catch (error) {
    console.error(error)
  }
}

export default seedPlatforms;