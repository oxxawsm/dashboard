/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [
  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Главная',
  },
  {
    path: '/app/charts',
    icon: <ChartBarIcon className={iconClasses} />,
    name: 'Аналитика',
  },
  {
    path: '/app/leads',
    icon: <InboxArrowDownIcon className={iconClasses} />,
    name: 'Проекты',
  },
  {
    path: '/app/integration',
    icon: <BoltIcon className={iconClasses} />,
    name: 'Интеграции',
  },
  {
    path: '/app/transactions',
    icon: <CurrencyDollarIcon className={iconClasses} />,
    name: 'Транзакции',
  },
  {
    path: '/app/billing',
    icon: <WalletIcon className={submenuIconClasses} />,
    name: 'Биллинг',
  },
  {
    path: '/app/calendar',
    icon: <CalendarDaysIcon className={iconClasses} />,
    name: 'Календарь',
  },
  {
    path: '/app/team',
    icon: <UsersIcon className={submenuIconClasses} />,
    name: 'Команда',
  },
]

export default routes


