import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBrandBySlug } from "~/models/brand.server";
import invariant from "tiny-invariant";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required");

  const brand = await getBrandBySlug(params.slug);
  invariant(brand, `Brand not found: ${params.slug}`);

  return json({ brand });
};

export default function BrandSlug() {
  const { brand } = useLoaderData();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Some Brand: {brand.name}
      </h1>
    </main>
  );
}