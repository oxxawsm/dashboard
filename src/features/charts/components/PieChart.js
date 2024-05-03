import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(ArcElement, Tooltip, Legend,
  Tooltip,
  Filler,
  Legend);

function PieChart() {

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
        data: [300, 219, 30, 51, 82, 16],
        backgroundColor: [
          'rgba(255, 99, 255, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 255, 0.8)',
          'rgba(75, 192, 255, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 255, 1)',
          'rgba(75, 192, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 255, 1)',
        ],
        borderWidth: 1,
      }
    ],
  };

  return (
    <TitleCard title={"Подписки по странам"}>
      <Pie options={options} data={data} />
    </TitleCard>
  )
}

export default PieChart