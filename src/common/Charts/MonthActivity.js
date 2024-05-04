import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../Cards/TitleCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function MonthActivity() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Количество пользователей',
        data: labels.map(() => { return Math.random() * 100 + 500 }),
        borderColor: 'rgb(124 58 237)',
        backgroundColor: 'rgba(167, 139, 250, 0.5)',
      },
    ],
  };


  return (
    <TitleCard title={'Активность за месяц'}>
      <Line data={data} options={options} />
    </TitleCard>
  )
}


export default MonthActivity;
