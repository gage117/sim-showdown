import { prisma } from "~/db.server";
import type { Wheelbase } from "@prisma/client";

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

export async function getWheelbaseByModel(model: string) {
  return await prisma.wheelbase.findUnique({
    where: { model },
  });
}

export async function getWheelbaseBySlug(slug: string) {
  return await prisma.wheelbase.findUnique({
    where: { slug },
  });
}

// export async function createWheelbase(data: Pick<Wheelbase, 'model' | 'slug'>) {
//   return await prisma.wheelbase.create({
//     data,
//   });
// }

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