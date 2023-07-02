import type { Prisma } from '@prisma/client'
import prisma from './prisma.ts';
import { slugifyForDB } from './seedUtils.ts';

function BrandSeed(name: string): Prisma.BrandCreateInput {
  return {
    name,
    slug: slugifyForDB(name)
  }
}

const brandSeeds: Prisma.BrandCreateInput[] = [
  BrandSeed('Ascher Racing'),
  BrandSeed('Asetek'),
  BrandSeed('Cube Controls'),
  BrandSeed('Fanatec'),
  BrandSeed('Gomez Sim Industries'),
  BrandSeed('Heusinkveld'),
  BrandSeed('Logitech'),
  BrandSeed('Moza'),
  BrandSeed('Simagic'),
  BrandSeed('Simucube'),
  BrandSeed('Thrustmaster'),
]

async function seedBrands() {
  console.log('Seeding brands...');
  try {
    for (const brand of brandSeeds) {
      await prisma.brand.upsert({
        where: { slug: brand.slug },
        update: {
          ...brand
        },
        create: {
          ...brand
        },
      })
    }
    console.log('Brands seeded!')
  } catch (error) {
    console.error(error)
  }
}

export default seedBrands;