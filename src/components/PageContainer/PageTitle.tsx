import { Typography } from '@mui/material'

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="h4" fontWeight="900" color="secondary">
      {title}
    </Typography>
  )
}

export default PageTitle
