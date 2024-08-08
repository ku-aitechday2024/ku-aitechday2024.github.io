import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'
import LinkIcon from '@mui/icons-material/Link'

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdag1YBvFK1OUlXSwLjC5CnF_8zLV-QcHaPChbst2XZomBDgA/viewform'

const RegisterPage = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="REGISTER" />
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: matches ? theme.spacing(3) : '',
            mt: theme.spacing(10),
            width: isLg ? '48%' : '80%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body1" fontWeight={800} color="anti.primary">
              사전등록 링크는 아래와 같습니다.
            </Typography>
            <Box
              component={Button}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItem: 'center',
                gap: theme.spacing(1),
                mt: theme.spacing(2)
              }}
              onClick={() => window.open(REGISTER_URL, '_blank')}
            >
              <LinkIcon color="secondary" sx={{ width: 21, height: 21 }} />
              <Typography variant="body2" fontWeight={800}>
                등록 링크
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </PageContainer>
  )
}

export default RegisterPage
