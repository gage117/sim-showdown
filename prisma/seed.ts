import {
  PrismaClient,
} from '@prisma/client'
// Shared types
import type {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Platform, SensorType
} from '@prisma/client';
import brands from './seedFiles/brands';
import platforms from './seedFiles/platforms';
import wheelbases from './seedFiles/wheelbases';
import pedals from './seedFiles/pedals';
import shifters from './seedFiles/shifters'
import slugify from 'slugify'
const prisma = new PrismaClient()

async function seed() {
  // console.log('Seeding platforms...');
  // for (const platform of platforms) {
  //   await prisma.platform.upsert({
  //     where: { name: platform.name },
  //     update: {
  //       slug: slugify(platform.name, { lower: true }),
  //     },
  //     create: {
  //       ...platform,
  //       slug: slugify(platform.name, { lower: true }),
  //     },
  //   })
  // }

  const platformsFromDB: Platform[] = await prisma.platform.findMany()

  // console.log('Seeding brands...');
  // for (const brand of brands) {
  //   await prisma.brand.upsert({
  //     where: { name: brand.name },
  //     update: {
  //       slug: slugify(brand.name, { lower: true }),
  //     },
  //     create: {
  //       ...brand,
  //       slug: slugify(brand.name, { lower: true }),
  //     },
  //   })
  // }
  
  // console.log('Seeding wheelbases...');
  // for (const wheelbase of wheelbases) {
  //   const platformIds = platformsFromDB.filter(platform => wheelbase.platforms.includes(platform.name)).map(platform => (platform.id))
  //   const slug = slugify(`${wheelbase.model}_${wheelbase.brand.connect.name}`, { lower: true })
  //   await prisma.wheelbase.upsert({
  //     where: { slug },
  //     update: {
  //       slug,
  //     },
  //     create: {
  //       ...wheelbase,
  //       platforms: {
  //         connect: platformIds.map(id => ({ id })),
  //       },
  //       slug,
  //     },
  //   })
  // }

  // console.log('Seeding pedals...');
  // for (const pedal of pedals) {
  //   const platformIds = platformsFromDB.filter(platform => pedal.platforms.includes(platform.name)).map(platform => (platform.id))
  //   const slug = slugify(`${pedal.model}_${pedal.brand.connect.name}`, { lower: true })
  //   await prisma.pedal.upsert({
  //     where: { slug },
  //     update: {
  //       slug,
  //     },
  //     create: {
  //       ...pedal,
  //       platforms: {
  //         connect: platformIds.map(id => ({ id })),
  //       },
  //       slug,
  //     },
  //   })
  // }

  console.log('Seeding shifters...');
  for (const shifter of shifters) {
    const platformIds = platformsFromDB.filter(platform => shifter.platforms.includes(platform.name)).map(platform => (platform.id))
    const slug = slugify(`${shifter.model}_${shifter.brand.connect.name}`, { lower: true })
    await prisma.shifter.upsert({
      where: { slug },
      update: {
        slug,
      },
      create: {
        ...shifter,
        platforms: {
          connect: platformIds.map(id => ({ id })),
        },
        slug,
      },
    })
  }

  console.log('Seeding complete! 🌱');
  return;
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })