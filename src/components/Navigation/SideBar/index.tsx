import { AppBar, IconButton, Toolbar } from '@mui/material'
import Logo from '@src/components/Navigation/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import SideBarDrawer from './SideBarDrawer'
import { useLocation } from 'react-router-dom'

const SideBarContainer = () => {
  const location = useLocation()
  const isMain = location.pathname === '/'
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(!open)
  }
  return (
    <AppBar
      position="static"
      sx={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        zIndex: 6,
        background: isMain ? 'inherit' : '',
        borderBottom: 1,
        borderColor: 'white'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo handleClicked={() => ''} />
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
        <SideBarDrawer open={open} handleDrawerClose={handleDrawer} />
      </Toolbar>
    </AppBar>
  )
}

export default SideBarContainer
