import { Grid, Typography, Container, styled, Divider, Box, useMediaQuery, useTheme } from '@mui/material'
import scheduleData from '@src/data/programs'

const ScheduleGrid = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const { palette } = useTheme()
  return (
    <Container sx={{ width: '90vw', maxWidth: '1000px', marginY: 8 }}>
      {!isMobile && (
        <Grid container spacing={3} py={2}>
          <Grid item xs={2}>
            <TitleTypography>시간</TitleTypography>
          </Grid>
          <Grid item xs={7}>
            <TitleTypography>프로그램</TitleTypography>
          </Grid>
          <Grid item xs={3}>
            <TitleTypography>연사</TitleTypography>
          </Grid>
        </Grid>
      )}
      <Divider sx={{ borderWidth: 1, backgroundColor: palette.secondary.main }} />
      {scheduleData.map((item, index) => (
        <Box key={index}>
          {isMobile ? (
            <Grid container alignContent={'center'} alignItems={'center'} py={1}>
              <Grid item xs={4} display={'flex'} justifyContent={'center'}>
                <Typography variant="caption" fontWeight={'bold'}>
                  {item.time}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Grid item>
                  <Typography
                    variant="body2"
                    fontWeight={'bold'}
                    color={item.presenter ? 'undefined' : palette.secondary.main}
                  >
                    {item.program}
                  </Typography>
                </Grid>
                {item.presenter && (
                  <Box display={'flex'} alignItems={'baseline'} mt={1}>
                    <Typography variant="caption" fontWeight={600} color={palette.text.disabled}>
                      {item.presenter}
                    </Typography>
                    {item.affiliation && item.affiliation !== '고려대 컴퓨터학과' && (
                      <Typography variant="caption" fontWeight={500} color={palette.secondary.main} ml={1}>
                        {item.affiliation}
                      </Typography>
                    )}
                  </Box>
                )}
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={3} alignContent={'center'}>
              <Grid item xs={2}>
                <ContentTypographyLight>{item.time}</ContentTypographyLight>
              </Grid>
              <Grid item xs={7} alignContent={'center'}>
                <Box
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={item.presenter ? 'flex-start' : 'center'}
                  alignContent={'center'}
                >
                  {item.presenter ? (
                    <ContentTypography>{item.program}</ContentTypography>
                  ) : (
                    <Typography
                      sx={{ margin: '1rem 0rem', fontsize: '1rem' }}
                      color="secondary"
                      fontWeight={'bold'}
                      textAlign={'center'}
                    >
                      {item.program}
                    </Typography>
                  )}
                </Box>
              </Grid>
              {item.presenter && (
                <Grid item xs={3} display={'flex'} alignItems={'baseline'}>
                  <ContentTypographyLight>
                    {item.presenter}
                    {item.affiliation && item.affiliation !== '고려대 컴퓨터학과' && (
                      <Typography variant="caption" fontWeight={600} color={palette.secondary.main} ml={1}>
                        • {item.affiliation}
                      </Typography>
                      // <Chip label={item.affiliation} variant="outlined" color={'secondary'} size="small" />
                    )}
                  </ContentTypographyLight>
                </Grid>
              )}
            </Grid>
          )}
          <Divider />
        </Box>
      ))}
    </Container>
  )
}

export default ScheduleGrid

const TitleTypography = styled(Typography)`
  font-weight: bold;
  margin-vertical: 1rem;
`

const ContentTypography = styled(Typography)`
  margin: 1rem 0rem;
  fontsize: 1rem;
  font-weight: 700;
`

const ContentTypographyLight = styled(Typography)`
  margin: 1rem 0rem;
  fontsize: 1rem;
  font-weight: 500;
`
