import { prisma } from "~/db.server";
import type { Shifter } from "@prisma/client";
// import type { NewShifter } from "~/types";
// import slugify from 'slugify';

export async function getShifters() {
  return await prisma.shifter.findMany({
    include: {
      brand: true,
      platforms: true,
    }
  });
}

export async function getShifterById(id: number) {
  return await prisma.shifter.findUnique({
    where: { id },
  });
}

export async function getShifterBySlug(slug: string) {
  return await prisma.shifter.findUnique({
    where: { slug },
  });
}

// export async function createShifter(data: NewShifter) {
//   return await prisma.shifter.create({
//     data: {
//       ...data,
//       slug: slugify(`${data.model}_${data.brand}`, { lower: true }),
//       brand: {
//         connectOrCreate: {
//           where: { name: data.brand },
//           create: { name: data.brand, slug: slugify(data.brand, { lower: true }) },
//         },
//       },
//       platforms: {
//         connectOrCreate: data.platforms.map((platform) => ({
//           where: { name: platform },
//           create: { name: platform, slug: slugify(platform, { lower: true }) },
//         })),
//       }
//     },
//   });
// }

export async function updateShifter(slug: string, data: Pick<Shifter, 'model' | 'slug'>) {
  return await prisma.shifter.update({
    where: { slug },
    data,
  });
}
