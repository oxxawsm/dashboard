import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AdsClickIcon from '@mui/icons-material/AdsClick';

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [
  {
    path: '/app/dashboard',
    icon: <SpaceDashboardIcon className={iconClasses} />,
    name: 'Главная',
  },
  {
    path: '/app/analytics',
    icon: <AutoGraphIcon className={iconClasses} />,
    name: 'Сводка',
  },
  {
    path: '/app/monitoring',
    icon: <DisplaySettingsIcon className={iconClasses} />,
    name: 'Технические отчёты',
  },
  {
    path: '/app/integration',
    icon: <AdsClickIcon className={iconClasses} />,
    name: 'Интеграции',
  },
  {
    path: '/app/sales',
    icon: <CurrencyRubleIcon className={iconClasses} />,
    name: 'Продажи',
  },
  {
    path: '/app/team',
    icon: <Diversity3Icon className={submenuIconClasses} />,
    name: 'Команда',
  },
]

export default routes;
