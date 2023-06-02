import type { V2_MetaFunction } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";
import {
  Button,
  ButtonGroup,
  Container,
  Typography
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
    <Container>
      <Typography variant="h1">Sim Showdown</Typography>
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
    </Container>
  );
}
