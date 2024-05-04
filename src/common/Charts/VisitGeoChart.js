import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import TitleCard from '../Cards/TitleCard';

ChartJS.register(ArcElement, Tooltip, Legend,
  Tooltip,
  Filler,
  Legend);

function VisitGeoChart() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['Россия', 'Беларусь', 'Казахстан', 'Узбекистан', 'Армения', 'Другие'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Количество покупок',
        data: [764, 219, 30, 51, 82, 16],
        backgroundColor: [
          '#bc4b51',
          '#8cb369',
          '#f4e285',
          '#f4a259',
          '#5b8e7d',
          '#bb9457',
        ],
        borderColor: [
          '#bc4b51',
          '#8cb369',
          '#f4e285',
          '#f4a259',
          '#5b8e7d',
          '#bb9457',
        ],
        borderWidth: 1,
      }
    ],
  };

  return (
    <TitleCard title={'География визитов'}>
      <Pie options={options} data={data} />
    </TitleCard>
  )
}


export default VisitGeoChart;
