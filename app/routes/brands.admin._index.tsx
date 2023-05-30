import { Link } from "@remix-run/react";

export default function Admin() {
  return (
    <main>
      <h1>Admin</h1>
      <ul>
        <li>
          <Link to="brands">Brands</Link>
        </li>
      </ul>
    </main>
  );
}