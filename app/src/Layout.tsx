import * as React from 'react';
import {
  Box,
  Container,
  Stack,
  AppBar,
  Typography,
  Toolbar,
  Link
} from '@mui/material';
import { Link as RemixLink } from '@remix-run/react';
import styled from '@emotion/styled';

const StyledLink = styled(RemixLink)`
  color: white;
  text-decoration: none;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{minHeight: '100vh', maxHeight: '100vh'}}>
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
      <Container maxWidth='md' sx={{ marginTop: '25px'}}>
        <Typography variant="h5" color="secondary" align="center">
          Still not enough info to make a decision?
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          This site is a work in progress, and we hope to bring more detailed comparisons in the future to enable you to make decisions without having to scour a variety of different sites for information.
          For now, the intent of this website is to help quickly and easily narrow your choices down to a couple of options that you can then research further.
        </Typography>
        <Typography variant="h5" color="secondary" align="center" sx={{marginTop: '20px'}}>
          How can I help?
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          If you have a wheelbase, wheel, or pedal set that you would like to see added to the site, please submit the data using the "Submit Data" link above.
          If you have any other feedback, please feel free to reach out to us on <Link href="https://discord.gg/fQ5XmqMdJF" color="secondary">Discord</Link>.
        </Typography>
      </Container>
    </Box>
  );
}
