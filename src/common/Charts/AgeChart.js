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

function AgeChart() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['Младше 18 лет', '18-24 года', '25-34 года', '35-44 года', '45-54 года', '55+'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Возраст',
        data: [347, 693, 600, 278, 110, 22],
        backgroundColor: [
          '#ffadad',
          '#ffd6a5',
          '#9bf6ff',
          '#caffbf',
          '#a0c4ff',
          '#fdffb6',
        ],
        borderColor: [
          '#ffadad',
          '#ffd6a5',
          '#9bf6ff',
          '#caffbf',
          '#a0c4ff',
          '#fdffb6',
        ],
        borderWidth: 1,
      }
    ],
  };

  return (
    <TitleCard title={'Возраст'}>
      <Doughnut options={options} data={data} />
    </TitleCard>
  )
}


export default AgeChart;
