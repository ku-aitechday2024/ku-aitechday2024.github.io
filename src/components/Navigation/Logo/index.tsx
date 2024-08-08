import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface LogoProps {
  handleClicked?: () => void
}
const Logo = ({ handleClicked }: LogoProps) => {
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={handleClicked}>
      <Typography variant="h5" fontWeight={700} lineHeight="normal">
        2023 AI TECH DAY
      </Typography>
    </Link>
  )
}

export default Logo
