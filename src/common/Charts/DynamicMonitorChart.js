import React, { useEffect, useState } from 'react';
import TitleCard from '../Cards/TitleCard';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DynamicLineChart = () => {
    // Функция для генерации начальных данных
    const generateInitialData = () => {
        const data = [];
        const labels = [];
        let startTime = Date.now();

        for (let i = 0; i < 10; i++) {
            data.push(Math.floor(Math.random() * 400));
            labels.push(new Date(startTime).toLocaleTimeString());
            startTime -= 3000; // уменьшаем на 3 секунды для начальной метки времени
        }

        return { data, labels };
    };

    const initialData = generateInitialData();

    const [chartData, setChartData] = useState({
        labels: initialData.labels.reverse(),  // Реверс массива, чтобы время шло в правильном порядке
        datasets: [
            {
                label: 'Миллисекунды (мс)',
                data: initialData.data.reverse(),  // Реверс массива данных
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
            }
        ],
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const timeNow = new Date().toLocaleTimeString();
            const newData = Math.floor(Math.random() * 400);

            const newChartData = {
                labels: [...chartData.labels, timeNow],
                datasets: [{
                    ...chartData.datasets[0],
                    data: [...chartData.datasets[0].data, newData]
                }]
            };

            // Ограничиваем длину массива данных, чтобы предотвратить его бесконечный рост
            if (newChartData.labels.length > 10) {
                newChartData.labels.shift();
                newChartData.datasets[0].data.shift();
            }

            setChartData(newChartData);
        }, 3000);

        return () => clearInterval(interval);
    }, [chartData]);

    return (
        <TitleCard title={'Время ответа сервиса'}>
            <Line data={chartData} />
        </TitleCard>
    );
};

export default DynamicLineChart;
