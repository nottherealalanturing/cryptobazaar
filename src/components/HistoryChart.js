import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './styles/HistoryChart.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
};

const getData = (data) => {
  const newDate = [];
  const newPrice = [];

  data.forEach((element) => {
    newDate.push(element.date.slice(0, 10));
    newPrice.push(element.priceUsd);
  });

  return { newDate, newPrice };
};

const HistoryChart = (props) => {
  const { id } = props;
  const [history, setHistory] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      );
      const histArray = response.data.data;
      setHistory(getData(histArray.slice(histArray.length - 10)));
    }
    fetchData();
  }, []);

  const labels = history.newDate;

  const data = {
    labels,
    datasets: [
      {
        label: `${id} history in the last 10 days`,
        data: history.newPrice,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Line options={options} data={data} />
    </div>
  );
};

HistoryChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HistoryChart;
