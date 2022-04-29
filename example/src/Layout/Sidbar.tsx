import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../routes/routes'
import PackageInfo from './PackageInfo'
import { Box } from 'theme-ui'
import config from '../config'
import { MenuItemType } from '../type'

const MenuItem = (props: { item: MenuItemType }) => {
  const { item } = props
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const active = item.path === pathname
  return (
    <Box
      p={3}
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        color: active ? 'primary' : 'inherit',
        backgroundColor: active ? 'highlight' : 'inherit'
      }}
      key={item.name}
      onClick={() => navigate(item.path)}
    >
      {item.name}
    </Box>
  )
}

export default function () {
  return (
    <Box
      sx={{
        width: config.sidbarWidth,
        overflowY: 'auto',
        height: '100vh',
        backgroundColor: (t) => t.colors?.background
      }}
    >
      <PackageInfo />
      <Box
        sx={{
          padding: (t) => `${t.space?.[2]}px 0`
        }}
      >
        {routes.map((item) => (
          <MenuItem item={item} key={item.path} />
        ))}
      </Box>
    </Box>
  )
}