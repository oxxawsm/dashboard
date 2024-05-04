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
          '#8e9aaf',
          '#1f7a8c',
          '#efd3d7',
        ],
        borderColor: [
          '#8e9aaf',
          '#1f7a8c',
          '#efd3d7',
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
