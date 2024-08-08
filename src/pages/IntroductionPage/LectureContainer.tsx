import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import type { INVITED_LECTURER } from '@src/data/introduction'

const LectureContainer = ({ lecturer }: { lecturer: INVITED_LECTURER }) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'))
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))
  const is4K = useMediaQuery('(min-width: 2560px)')
  const WIDTH = is4K ? '32%' : isLg ? '48%' : '85%'
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: isMd ? theme.spacing(3) : '',
        mt: theme.spacing(8),
        width: WIDTH
      }}
    >
      <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid container item sx={{ display: 'flex', flexDirection: 'row', marginBottom: 1 }}>
          <Grid item lg={6} md={6} sm={12}>
            <img src={lecturer.profile} width={'auto'} height={180} />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                  marginBottom: 1,
                  gap: 1
                }}
              >
                <Typography variant="h4" fontWeight="700" color="anti.primary" lineHeight={1}>
                  {lecturer.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography variant="body2" fontWeight="500" color="anti.primary" lineHeight={1}>
                    {lecturer.position}
                  </Typography>
                  <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
                  <Typography variant="body2" fontWeight="500" color="secondary" lineHeight={1}>
                    {lecturer.company}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  mb: theme.spacing(1)
                }}
              >
                <Typography fontWeight="700" color="secondary" sx={{ fontSize: 13, marginBottom: 1 }}>
                  학력
                </Typography>
                {lecturer.education?.map((career, index) => (
                  <Typography fontSize={12} key={index}>
                    {career}
                  </Typography>
                ))}
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}
              >
                <Typography fontWeight="700" color="secondary" sx={{ fontSize: 13, marginBottom: 1 }}>
                  주요 이력
                </Typography>
                {lecturer.career.map((career, index) => (
                  <Typography fontSize={12} key={index}>
                    {career}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item lg={12} sm={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Typography fontWeight="700" color="secondary" sx={{ fontSize: 13, marginBottom: 1 }}>
              강연
            </Typography>
            {lecturer.lectureTitle && (
              <Typography variant="body2" fontWeight="800" sx={{ marginBottom: 1 }}>
                {lecturer.lectureTitle}
              </Typography>
            )}
            {lecturer.lectureContent.map((content, index) => (
              <Typography variant="body2" key={index}>
                {content}
              </Typography>
            ))}
          </Box>
          <Divider sx={{ height: 3, width: '6%', backgroundColor: '#02306C', mt: theme.spacing(1) }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LectureContainer
