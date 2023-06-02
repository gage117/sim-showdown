import * as React from 'react';
import {
  Box,
  Stack,
  AppBar,
  Typography,
  Toolbar,
} from '@mui/material';
import { Link } from '@remix-run/react';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <StyledLink to="/">
            <Typography variant="h5">
              Sim Showdown
            </Typography>
          </StyledLink>
          <Stack direction='row' spacing={2} sx={{ marginLeft: '20px', flexGrow: 1 }}>
            <StyledLink to="/wheelbases">
              <Typography variant="button" color="secondary">
                Wheelbases
              </Typography>
            </StyledLink>
            <StyledLink to="/wheels">
              <Typography variant="button" color="secondary">
                Wheels
              </Typography>
            </StyledLink>
            <StyledLink to="/pedals">
              <Typography variant="button" color="secondary">
                Pedals
              </Typography>
            </StyledLink>
          </Stack>
          <StyledLink to="/submit-data">
            <Typography variant="button" color="secondary">
              Submit Data
            </Typography>
          </StyledLink>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
