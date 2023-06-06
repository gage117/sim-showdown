import { prisma } from "~/db.server";
import type { Wheelbase } from "@prisma/client";
import type { NewWheelbase } from "~/types";
import slugify from 'slugify';

export async function getWheelbases() {
  return await prisma.wheelbase.findMany({
    include: {
      brand: true,
      platforms: true,
    }
  });
}

export async function getWheelbaseById(id: number) {
  return await prisma.wheelbase.findUnique({
    where: { id },
  });
}

export async function getWheelbaseBySlug(slug: string) {
  return await prisma.wheelbase.findUnique({
    where: { slug },
  });
}

export async function createWheelbase(data: NewWheelbase) {
  if (!data.degrees_of_rotation) data.degrees_of_rotation = 'N/A';
  return await prisma.wheelbase.create({
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

export async function updateWheelbase(slug: string, data: Pick<Wheelbase, 'model' | 'slug'>) {
  return await prisma.wheelbase.update({
    where: { slug },
    data,
  });
}

export async function deleteWheelbase(slug: string) {
  return await prisma.wheelbase.delete({
    where: { slug },
  });
}