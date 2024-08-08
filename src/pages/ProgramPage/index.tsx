import { Grid } from '@mui/material'
import ScheduleGrid from './ScheduleGrid'
import PageContainer from '@src/components/PageContainer'
import PageTitle from '@src/components/PageContainer/PageTitle'

const ProgramPage = () => {
  return (
    <PageContainer>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <PageTitle title="PROGRAM" />
        <ScheduleGrid />
      </Grid>
    </PageContainer>
  )
}

export default ProgramPage
