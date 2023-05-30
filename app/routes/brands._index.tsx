import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

import { getBrands } from "~/models/brand.server"

export const loader = async () => {
  return json({ brands: await getBrands() })
}

export default function Brands() {
  const { brands } = useLoaderData()

  return (
    <main>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <h1>Brands</h1>
      <ul>
        {brands.map((brand: any) => (
          <li key={brand.slug}>
            <Link
              to={brand.slug}
              className="text-blue-600 underline"
            >
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}