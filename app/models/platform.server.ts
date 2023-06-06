import { prisma } from "~/db.server";
import type { Platform } from "@prisma/client";

export async function getPlatforms() {
  return await prisma.platform.findMany();
}

export async function getPlatformById(id: number) {
  return await prisma.platform.findUnique({
    where: { id },
  });
}

export async function getPlatformByName(name: string) {
  return await prisma.platform.findUnique({
    where: { name },
  });
}

export async function getPlatformBySlug(slug: string) {
  return await prisma.platform.findUnique({
    where: { slug },
  });
}

export async function createPlatform(data: Pick<Platform, 'name' | 'slug'>) {
  return await prisma.platform.create({
    data,
  });
}

export async function updatePlatform(slug: string, data: Pick<Platform, 'name' | 'slug'>) {
  return await prisma.platform.update({
    where: { slug },
    data,
  });
}

export async function deletePlatform(slug: string) {
  return await prisma.platform.delete({
    where: { slug },
  });
}