import { Container, Typography, Link } from "@mui/material"

export default function Wheels() {
  return (
    <Container maxWidth='sm' sx={{ marginTop: '50px', marginBottom: '100px'}}>
      <Typography variant="h2" color="secondary" align="center">
        Wheels
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" mt={1}>
        This page is currently in progress. Wheels have been one of the most complex items to try and aggregate all the different specs and into a single format to render a table for. It will take a while to compare the data from each brand and ensure I have all of these wheels able to be listed using a single format.
      </Typography>
      <Typography variant="h3" color="secondary" align="center" sx={{marginTop: '20px'}}>
        Looking to help?
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" mt={2}>
        This site is built using Remix, TypeScript, and Postgres. If you have experience and would like to contribute your effort to building the platform please reach out to me on <Link href="https://discord.gg/fQ5XmqMdJF" color="secondary">Discord</Link>.
      </Typography>
    </Container>
  )
}