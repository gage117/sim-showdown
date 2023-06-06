import { prisma } from "~/db.server";
import type { Pedal } from "@prisma/client";
import type { NewPedal } from "~/types";
import slugify from 'slugify';

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

export async function getPedalBySlug(slug: string) {
  return await prisma.pedal.findUnique({
    where: { slug },
  });
}

export async function createPedal(data: NewPedal) {
  return await prisma.pedal.create({
    data: {
      ...data,
      slug: slugify(`${data.model}_${data.brand}`, { lower: true }),
      brand: {
        connectOrCreate: {
          where: { name: data.brand },
          create: { name: data.brand, slug: slugify(data.brand, { lower: true }) },
        },
      },
      platforms: {
        connectOrCreate: data.platforms.map((platform) => ({
          where: { name: platform },
          create: { name: platform, slug: slugify(platform, { lower: true }) },
        })),
      }
    },
  });
}

export async function updatePedal(slug: string, data: Pick<Pedal, 'model' | 'slug'>) {
  return await prisma.pedal.update({
    where: { slug },
    data,
  });
}
