import { Box, Button, Divider, Grid, Typography, useTheme } from '@mui/material'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import KakaoMap from './KakaoMap'
import LinkIcon from '@mui/icons-material/Link'
const LOCATION = '서울 성북구 고려대로22길 6-7'
const SPECIFIC_LOCATION = '고려대학교 하나스퀘어 (지하1층)'
const MAP_ROUTE_URL =
  'https://map.kakao.com/link/from/%EC%95%88%EC%95%94%EC%97%AD%206%ED%98%B8%EC%84%A0,%2037.5863,%20127.0293/to/%EA%B3%A0%EB%A0%A4%EB%8C%80%ED%95%99%EA%B5%90%ED%95%98%EB%82%98%EC%8A%A4%ED%80%98%EC%96%B4,37.5846168,%20127.0253533'

const LocationPage = () => {
  const theme = useTheme()
  return (
    <PageContainer>
      <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item>
          <PageTitle title="LOCATION" />
        </Grid>
        <Grid
          container
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: theme.spacing(10)
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: theme.spacing(1),
              justifyContent: 'center'
            }}
          >
            <LocationOnIcon color="secondary" sx={{ width: 21, height: 21 }} />
            <Typography variant="body1" fontWeight={800}>
              {LOCATION}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={800}>
              {SPECIFIC_LOCATION}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginY: theme.spacing(5)
            }}
          >
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', mr: theme.spacing(2) }} />
            <Typography variant="h6" fontWeight={800} color="secondary">
              지도
            </Typography>
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', ml: theme.spacing(2) }} />
          </Box>
          <Box
            component={Button}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1
            }}
            onClick={() => window.open(MAP_ROUTE_URL, '_blank')}
          >
            <LinkIcon color="secondary" sx={{ width: 21, height: 21 }} />
            <Typography variant="body2" fontWeight={800}>
              지도 바로가기
            </Typography>
          </Box>
          <KakaoMap />
          {/* <Box sx={{ padding: theme.spacing(1) }}>
            <img src="/assets/map.svg" width="100%" height="100%" />
          </Box> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginY: theme.spacing(5)
            }}
          >
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', mr: theme.spacing(2) }} />
            <Typography variant="h6" fontWeight={800} color="secondary">
              행사장 도면
            </Typography>
            <Divider sx={{ height: 3, width: '12%', backgroundColor: '#02306C', ml: theme.spacing(2) }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/assets/blueprintNew.png" width="50%" />
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default LocationPage
