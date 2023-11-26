import { Box, Container, Stack, Toolbar } from '@mui/material'
import HeroSection from './_components/hero-section.component'
import AboutMe from './_components/about.component'
import Experience from './_components/experience.component'
import Projects from './_components/projects.component'
import Socials from './_components/socials.component'
import Spotlight from './_components/spotlight.component'
import RouteSection from './_components/route-section.component'

export default function Home() {
  return (
    <Box position={"relative"}>
      <Stack component="main"
        spacing={30}
        pb={20}>
        <Box
          component="section"
          height="100vh"
          pl={10} pb={5}>
          <RouteSection id="home" />
          <HeroSection />
        </Box>

        <Container component={Stack}
          spacing={30}
          sx={{
            alignSelf: "center"
          }}>

          <Box>
            <RouteSection id="about" />
            <AboutMe />
          </Box>

          <Box>
            <RouteSection id="experience" />
            <Experience />
          </Box>

          <Box>
            <RouteSection id="projects" />
            <Projects />
          </Box>
        </Container>
      </Stack>

      <Socials />

      <Spotlight />
    </Box>
  )
}
