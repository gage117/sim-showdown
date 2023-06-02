import {
  Button,
  ButtonGroup,
  Container,
  Typography
} from "@mui/material";
import { Link, Outlet } from "@remix-run/react";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export default function SubmitData() {
  return (
    <Container>
      <Typography variant="h1">Submit Data For:</Typography>
      <ButtonGroup variant="contained" color="secondary">
        <Button>
          <StyledLink to="wheelbase">Wheelbases</StyledLink>
        </Button>
        <Button>
          <StyledLink to="wheel">Wheels</StyledLink>
        </Button>
        <Button>
          <StyledLink to="pedal">Pedals</StyledLink>
        </Button>
      </ButtonGroup>
      <Outlet />
    </Container>
  );
}