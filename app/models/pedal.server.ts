import { prisma } from "~/db.server";
import type { Pedal } from "@prisma/client";

export async function getPedals() {
  return await prisma.pedal.findMany({
    include: {
      brand: true,
      platforms: true,
    }
  });
}

export async function getPedalById(id: number) {
  return await prisma.pedal.findUnique({
    where: { id },
  });
}

export async function getPedalByModel(model: string) {
  return await prisma.pedal.findUnique({
    where: { model },
  });
}

export async function getPedalBySlug(slug: string) {
  return await prisma.pedal.findUnique({
    where: { slug },
  });
}

// export async function createPedal(data: Pick<Pedal, 'model' | 'slug'>) {
//   return await prisma.pedal.create({
//     data,
//   });
// }

export async function updatePedal(slug: string, data: Pick<Pedal, 'model' | 'slug'>) {
  return await prisma.pedal.update({
    where: { slug },
    data,
  });
}
