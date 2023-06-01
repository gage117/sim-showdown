import type { V2_MetaFunction } from "@remix-run/node";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sim Showdown" },
    { name: "description", content: "Directly compare sim racing products" },
  ];
};

export default function Index() {
  const theme = useTheme();
  console.log(theme);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Typography variant="h1">Sim Showdown</Typography>
    </div>
  );
}
