import { prisma } from "~/db.server";
import type { Brand } from "@prisma/client";

export async function getBrands() {
  return await prisma.brand.findMany();
}

export async function getBrandById(id: number) {
  return await prisma.brand.findUnique({
    where: { id },
  });
}

export async function getBrandByName(name: string) {
  return await prisma.brand.findUnique({
    where: { name },
  });
}

export async function getBrandBySlug(slug: string) {
  return await prisma.brand.findUnique({
    where: { slug },
  });
}

export async function createBrand(data: Pick<Brand, 'name' | 'slug'>) {
  return await prisma.brand.create({
    data,
  });
}

export async function updateBrand(slug: string, data: Pick<Brand, 'name' | 'slug'>) {
  return await prisma.brand.update({
    where: { slug },
    data,
  });
}

export async function deleteBrand(slug: string) {
  return await prisma.brand.delete({
    where: { slug },
  });
}