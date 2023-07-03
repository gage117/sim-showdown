import { prisma } from "~/db.server";
import type { Handbrake } from "@prisma/client";
// import type { NewHandbrake } from "~/types";
// import slugify from 'slugify';

export async function getHandbrakes() {
  return await prisma.handbrake.findMany({
    include: {
      brand: true,
      platforms: true,
    }
  });
}

export async function getHandbrakeById(id: number) {
  return await prisma.handbrake.findUnique({
    where: { id },
  });
}

export async function getHandbrakeBySlug(slug: string) {
  return await prisma.handbrake.findUnique({
    where: { slug },
  });
}

// export async function createHandbrake(data: NewHandbrake) {
//   return await prisma.handbrake.create({
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

export async function updateHandbrake(slug: string, data: Pick<Handbrake, 'model' | 'slug'>) {
  return await prisma.handbrake.update({
    where: { slug },
    data,
  });
}
