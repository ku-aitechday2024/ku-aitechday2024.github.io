import { Box, Typography, useTheme } from '@mui/material'
import { LinkTypography } from '@src/components/LinkBox'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  const { palette } = useTheme()
  return (
    <Box>
      <Box
        sx={{
          border: `2px solid ${palette.secondary.main}`,
          justifyContent: 'center',
          padding: 8,
          marginTop: 10
        }}
      >
        <Typography variant="caption" textAlign={'center'}>
          페이지를 찾을 수 없습니다.
        </Typography>
        <LinkTypography>
          <Link to="/" style={{ textDecoration: 'none', color: palette.secondary.main }}>
            <Typography variant="body1" fontWeight={'bold'} color={'inherit'} textAlign={'center'}>
              홈으로 돌아가기
            </Typography>
          </Link>
        </LinkTypography>
      </Box>
    </Box>
  )
}

export default NotFoundPage
