import { Box, Tab, Tabs } from '@mui/material'
import NavigationPaths from '@src/data/navigation'
interface HeaderTabsProps {
  currentTab: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

export const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdag1YBvFK1OUlXSwLjC5CnF_8zLV-QcHaPChbst2XZomBDgA/viewform'

const HeaderTabs = ({ currentTab, handleChange }: HeaderTabsProps) => {
  const handleRegisterClick = (event: React.SyntheticEvent) => {
    handleChange(event, 0)
    return window.open(REGISTER_URL, '_blank')
  }
  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor={'inherit'}
        indicatorColor={'primary'}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        {NavigationPaths.map((navbar, index) =>
          index !== 3 ? (
            <Tab key={index} label={navbar.name} value={index} />
          ) : (
            <Tab key={index} label={navbar.name} value={index} onClick={handleRegisterClick} />
          )
        )}
      </Tabs>
    </Box>
  )
}

export default HeaderTabs
