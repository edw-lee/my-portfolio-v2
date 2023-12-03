import { Box, Container, Stack, Toolbar } from '@mui/material'
import HeroSection from './_components/hero-section.component'
import AboutMe from './_components/about.component'
import Experience from './_components/experience.component'
import Projects from './_components/projects.component'
import Socials from './_components/socials.component'
import Spotlight from './_components/spotlight.component'
import RouteSection from './_components/route-section.component'

function Section({ id }: { id: string }) {
  return <section id={id} style={{ height: 1 }}></section>
}

export default function Home() {
  return (
    <Box position={"relative"}>
      <Stack component="main"
        spacing={{ xs: 15, md: 15 }}
        pb={20}>
        <Box
          component="section"
          height="100dvh"
          pl={{ xs: 2, sm: 5, md: 10 }}
          pb={5}>
          <Section id="home"></Section>
          <RouteSection route="home" />
          <HeroSection />
        </Box>

        <Container component={Stack}
          spacing={{ xs: 15, md: 20 }}
          sx={{
            alignSelf: "center"
          }}>

          <Section id="about"></Section>
          <Box>
            <RouteSection route="about" />
            <AboutMe />
          </Box>

          <Section id="experience"></Section>
          <Box>
            <RouteSection route="experience" />
            <Experience />
          </Box>

          <Section id="projects"></Section>
          <Box>
            <RouteSection route="projects" />
            <Projects />
          </Box>
        </Container>
      </Stack>

      <Socials />

      <Spotlight />
    </Box>
  )
}
