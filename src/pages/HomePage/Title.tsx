import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { LinkTypography } from '@src/components/LinkBox'
import { Link } from 'react-router-dom'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkIcon from '@mui/icons-material/Link'

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdag1YBvFK1OUlXSwLjC5CnF_8zLV-QcHaPChbst2XZomBDgA/viewform'

const Title = () => {
  const theme = useTheme()
  const matches = useMediaQuery('(max-width:1000px)')
  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={6}
      p={theme.spacing(8)}
      justifyContent={'space-between'}
      sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }} mt={10}>
        <Typography variant={matches ? 'subtitle2' : 'h5'}>고려대학교 ICT명품인재양성사업단&nbsp;</Typography>
        <Typography variant={'h2'} sx={{ fontWeight: 900, marginBottom: theme.spacing(2) }}>
          2023 AI TECH DAY
        </Typography>
      </Box>
      <Box mt={2}>
        <Grid>
          <Link to={'/program'} style={{ textDecoration: 'none' }}>
            <LinkTypography>
              <CalendarTodayIcon color="inherit" fontSize="small" />
              <Typography variant={matches ? 'body2' : 'body1'} ml={1} fontWeight={'regular'} color="inherit">
                2023.11.22 (수) 10:00 ~ 18:20
              </Typography>
            </LinkTypography>
          </Link>
        </Grid>

        <Grid mt={1}>
          <Link to={'/location'} style={{ textDecoration: 'none' }}>
            <LinkTypography>
              <LocationOnIcon color="inherit" fontSize="small" />
              <Typography variant={matches ? 'body2' : 'body1'} ml={1} fontWeight={'regular'} color="inherit">
                고려대학교 하나스퀘어 (지하 1층)
              </Typography>
            </LinkTypography>
          </Link>
        </Grid>
        <Grid mt={1}>
          <Link to="/" style={{ textDecoration: 'none' }} onClick={() => window.open(REGISTER_URL, '_blank')}>
            <LinkTypography>
              <LinkIcon sx={{ width: 21, height: 21 }} />
              <Typography variant={matches ? 'body2' : 'body1'} ml={1} fontWeight={'regular'} color="inherit">
                사전등록 바로가기
              </Typography>
            </LinkTypography>
          </Link>
          <Box ml={4}>
            <Typography variant={'caption'} fontWeight={'regular'} color={theme.palette.text.secondary}>
              사전등록하신 분들에게는 배지(네임택)와 행사 당일 사용가능한 쿠폰을 제공합니다
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Box mt={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
            연구 교류 및 성과 공유
          </Typography>
          <Typography variant="caption">사업단 소속 교수진 연구개발 성과 발표</Typography>
          <Typography variant="caption">사업단 산하 연구실 포스터 전시 및 데모</Typography>
          <Typography variant="caption">AI 기업 연구개발 성과 및 미래 전략 발표</Typography>
          <Typography variant="caption">기업체 홍보 및 리크루팅</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
            초청강연
          </Typography>
          <Typography variant="caption">네이버, LG, SKT, 삼성SDS, 한화시스템, 카카오브레인</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle1" fontWeight="bold" color={theme.palette.text.secondary}>
            Recruiting 참여 기업
          </Typography>
          <Typography variant="caption" mt={1}>
            Samsung Research, 삼성전기, 한화시스템, FuriosaAI 등
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default Title
