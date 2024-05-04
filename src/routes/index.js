import { lazy } from 'react'

const Analytics = lazy(() => import('../pages/internalPages/Analytics'))
const Page404 = lazy(() => import('../pages/internalPages/404'))
const Dashboard = lazy(() => import('../pages/internalPages/Dashboard'))
const Integration = lazy(() => import('../pages/internalPages/Integrations'))
const Team = lazy(() => import('../pages/internalPages/Team'))
const Sales = lazy(() => import('../pages/internalPages/Sales'))
const ProfileSettings = lazy(() => import('../pages/internalPages/ProfileSettings'))
const TechMonitoring = lazy(() => import('../pages/internalPages/TechMonitoring'))


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/monitoring',
    component: TechMonitoring,
  },
  {
    path: '/team',
    component: Team,
  },
  {
    path: '/sales',
    component: Sales,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/integration',
    component: Integration,
  },
  {
    path: '/analytics',
    component: Analytics,
  },
  {
    path: '/404',
    component: Page404,
  },
]

export default routes;
