import * as React from 'react';
import {
  Box,
  Container,
  AppBar,
  Typography,
  Button,
  Toolbar,
  IconButton,
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
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StyledLink to="/">Sim Showdown</StyledLink>
          </IconButton>
          <Container>
            <StyledLink to="/brands">
              <Typography variant="h6">
                Brands
              </Typography>
            </StyledLink>
          </Container>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
