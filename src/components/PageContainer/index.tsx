import { Box, useMediaQuery, useTheme } from '@mui/material'

const PageContainer = ({ children }: { children: JSX.Element }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        flexDirection: 'column',
        padding: matches ? theme.spacing(7) : theme.spacing(3, 1),
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  )
}

export default PageContainer
