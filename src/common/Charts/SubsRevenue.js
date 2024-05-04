import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SubsRevenue() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };

  const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Премиум',
        data: labels.map(() => { return Math.random() * 100000 + 1000 }),
        backgroundColor: '#4e8098',
      },
      {
        label: 'Для профи',
        data: labels.map(() => { return Math.random() * 50000 + 700 }),
        backgroundColor: '#90c2e7',
      },
      {
        label: 'Корпоративная',
        data: labels.map(() => { return Math.random() * 100000 + 2900 }),
        backgroundColor: '#ced3dc',
      },
    ],
  };

  return (
    <TitleCard title={'Доходность по типу подписок'}>
      <Bar options={options} data={data} />
    </TitleCard>
  )
}

export default SubsRevenue;
