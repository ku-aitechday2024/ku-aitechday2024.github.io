import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import { LEADER } from '@src/data/introduction'
import { Link } from '@mui/icons-material'

const Leader = () => {
  const matches = useMediaQuery('(max-width:800px)')
  const theme = useTheme()
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={6}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: theme.spacing(8)
      }}
    >
      <Grid
        item
        lg={8}
        md={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={matches ? 'center' : 'flex-end'}>
          <img src={LEADER.profile} width={180} height={240} loading="lazy" style={{ borderRadius: 240 }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} mt={theme.spacing(4)} mb={matches ? 10 : 0}>
          <Typography variant="h5" fontWeight="700" color="anti.primary" textAlign={matches ? 'left' : 'right'}>
            인사말
          </Typography>
          <Typography variant="h6" fontWeight="700" mt={theme.spacing(1)} textAlign={matches ? 'left' : 'right'}>
            {LEADER.position} {LEADER.name}
          </Typography>
          <Box maxWidth={'800px'}>
            <Typography variant="body2" fontWeight="400" mt={theme.spacing(1)} textAlign={matches ? 'left' : 'justify'}>
              {LEADER.content}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            fontWeight="400"
            mt={theme.spacing(1)}
            onClick={() => window.open(LEADER.url, '_blank')}
            alignItems={'center'}
            style={{ cursor: 'pointer' }}
            display={'flex'}
            justifyContent={matches ? 'flex-start' : 'flex-end'}
            color={theme.palette.secondary.contrastText}
          >
            <Link fontSize="small" style={{ color: theme.palette.secondary.contrastText }} />
            &nbsp;사업단 홈페이지
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Leader
