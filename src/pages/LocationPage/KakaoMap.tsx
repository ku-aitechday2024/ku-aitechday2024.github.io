import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const KakaoMap = () => {
  const theme = useTheme()
  const isLg = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(37.584948, 127.027816),
      level: 3
    }
    const map = new kakao.maps.Map(container, options)
    const markerPosition = new kakao.maps.LatLng(37.5846168, 127.0253533)

    const marker = new kakao.maps.Marker({
      position: markerPosition
    })
    // const linePath = [
    //   new kakao.maps.LatLng(37.5843, 127.02555),
    //   new kakao.maps.LatLng(37.5853, 127.0275),
    //   new kakao.maps.LatLng(37.5862, 127.0274),
    //   new kakao.maps.LatLng(37.586192, 127.0278576)
    // ]

    // // 지도에 표시할 선을 생성합니다
    // const polyline = new kakao.maps.Polyline({
    //   path: linePath, // 선을 구성하는 좌표배열 입니다
    //   strokeWeight: 5, // 선의 두께 입니다
    //   strokeColor: '#FFAE00', // 선의 색깔입니다
    //   strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    //   strokeStyle: 'solid' // 선의 스타일입니다
    // })
    // polyline.setMap(map)
    marker.setMap(map)
  }, [])

  return (
    <Box sx={{ display: 'flex', padding: theme.spacing(1) }}>
      <Box id="map" style={{ width: isLg ? 500 : 300, height: isLg ? 500 : 300 }} />
    </Box>
  )
}

export default KakaoMap
