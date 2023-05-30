import { prisma } from "~/db.server";

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