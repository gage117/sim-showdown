const { PrismaClient, Platform } = require('@prisma/client')
const slugify = require('slugify')
const brands = require('./seedFiles/brands')
const platforms = require('./seedFiles/platforms')
const wheelbases = require('./seedFiles/wheelbases')
const prisma = new PrismaClient()

async function seed() {
  console.log('Seeding platforms...');
  for (const platform of platforms) {
    await prisma.platform.upsert({
      where: { name: platform.name },
      update: {
        slug: slugify(platform.name, { lower: true }),
      },
      create: {
        ...platform,
        slug: slugify(platform.name, { lower: true }),
      },
    })
  }

  const platformsFromDB: typeof Platform[] = await prisma.platform.findMany()

  console.log('Seeding brands...');
  for (const brand of brands) {
    await prisma.brand.upsert({
      where: { name: brand.name },
      update: {
        slug: slugify(brand.name, { lower: true }),
      },
      create: {
        ...brand,
        slug: slugify(brand.name, { lower: true }),
      },
    })
  }
  
  console.log('Seeding wheelbases...');
  for (const wheelbase of wheelbases) {
    const platformIds = platformsFromDB.filter(platform => wheelbase.platforms.includes(platform.name)).map(platform => (platform.id))
    await prisma.wheelbase.upsert({
      where: { model: wheelbase.model },
      update: {
        slug: slugify(wheelbase.model, { lower: true }),
      },
      create: {
        ...wheelbase,
        platforms: {
          connect: platformIds.map(id => ({ id })),
        },
        slug: slugify(wheelbase.model, { lower: true }),
      },
    })
  }
  console.log('Seeding complete! 🌱');
}

seed()