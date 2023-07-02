import prisma from './seedFiles/prisma.ts';
import seedPlatforms from './seedFiles/platforms.ts';
import seedBrands from './seedFiles/brands.ts';
import seedWheelbases from './seedFiles/wheelbases.ts';
import seedPedals from './seedFiles/pedals.ts';
import seedShifters from './seedFiles/shifters.ts';

async function seed() {
  console.log('\n\nSeeding database...');
  console.log('---------------------------------');
  console.log('Seeding Non-Dependent Tables...');
  console.log('---------------------------------');
  await Promise.all([
    seedPlatforms(),
    seedBrands(),
  ]);
  console.log('---------------------------------');
  console.log('Seeding Dependent Tables...');
  console.log('---------------------------------');
  await Promise.all([
    seedWheelbases(),
    seedPedals(),
    seedShifters(),
  ]);
  console.log('---------------------------------');
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