import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button, Typography } from "@mui/material";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI Remix in TypeScript example
      </Typography>
      <Link to="/brands">
        <Button variant="contained" color="primary">
          Brands
        </Button>
      </Link>
    </div>
  );
}
