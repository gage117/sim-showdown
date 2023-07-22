import {
  Button,
  ButtonGroup,
  Stack,
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
    <Stack alignItems='center' gap={4} sx={{ margin: '40px auto'}}>
      <Typography variant="h2" align="center">Submit Data For:</Typography>
      <ButtonGroup variant="contained" color="secondary">
        <Button>
          <StyledLink to="wheelbase">Wheelbases</StyledLink>
        </Button>
        <Button>
          <StyledLink to="pedal">Pedals</StyledLink>
        </Button>
      </ButtonGroup>
      <Outlet />
    </Stack>
  );
}