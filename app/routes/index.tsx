import type { V2_MetaFunction } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";
import {
  Button,
  ButtonGroup,
  Typography,
  Stack
} from "@mui/material";
import styled from "@emotion/styled";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Sim Showdown" },
    { name: "description", content: "Directly compare sim racing products" },
  ];
};

const StyledLink = styled(RemixLink)`
  color: inherit;
  text-decoration: none;
`;

export default function Index() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={5}
    >
      <Typography variant="h1" color="secondary" sx={{ marginTop: '50px'}}>Sim Showdown</Typography>
      <Stack
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h3">Compare:</Typography>
        <ButtonGroup variant="contained" color="secondary">
          <Button>
            <StyledLink to="/wheelbases">Wheelbases</StyledLink>
          </Button>
          <Button>
            <StyledLink to="/wheels">Wheels</StyledLink>
          </Button>
          <Button>
            <StyledLink to="/pedals">Pedals</StyledLink>
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
