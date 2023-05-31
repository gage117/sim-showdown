import { Button } from "@mui/material";
import { json } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  Outlet
} from "@remix-run/react";

import { getBrands } from "~/models/brand.server";

export const loader = async () => {
  return json({ brands: await getBrands() });
};

export default function BrandAdmin() {
  const { brands } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Brand Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {brands.map((brand) => (
              <li key={brand.slug}>
                <Link
                  to={brand.slug}
                  className="text-blue-600 underline"
                >
                  <Button variant="contained" color="secondary">
                    {brand.name}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
