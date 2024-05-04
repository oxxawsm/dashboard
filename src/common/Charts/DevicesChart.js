import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import TitleCard from '../Cards/TitleCard';

ChartJS.register(ArcElement, Tooltip, Legend,
  Tooltip,
  Filler,
  Legend);

function DevicesChart() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['Мобильные', 'Десктоп', 'Планшеты'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Количество пользователей',
        data: [786, 347, 115],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      }
    ],
  };

  return (
    <TitleCard title={'Устройства'}>
      <Doughnut options={options} data={data} />
    </TitleCard>
  )
}


export default DevicesChart;
