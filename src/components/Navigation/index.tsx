import { Box, styled, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import SideBarContainer from './SideBar'
import BackgroundImage from './BackgroundImg'

const ThemeWrapper = styled(Box)(
  () => `
        position: relative;
        z-index: 5;
        display: block;
        flex: 1;
        min-width: 0;
    `
)

const Navigation = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [isMobile, setIsMobile] = useState(matches)
  const location = useLocation()

  const showBackgroundImage = location.pathname === '/'

  useEffect(() => {
    setIsMobile(matches)
  }, [matches])
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: showBackgroundImage ? theme.palette.background.paper : theme.palette.background.default,
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        width: '100vw'
      }}
    >
      {showBackgroundImage && <BackgroundImage />}
      <Box
        width="100vw"
        minHeight="100vh"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {isMobile ? <SideBarContainer /> : <Header />}
        <ThemeWrapper >
          <Outlet />
        </ThemeWrapper>
      </Box>
    </Box>
  )
}

export default Navigation
