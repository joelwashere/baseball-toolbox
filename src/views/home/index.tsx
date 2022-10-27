import { FC } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

export const HomeView: FC = ({ }) => {

  function calculateThrowVolume(effort: number, throwsPerDay: number, days: number) {
      var throwsArray = [throwsPerDay];
  
      for(var i = 1; i < days; i++) {
        var day = i + 1;
        var totalThrows = throwsArray[i - 1] + (day * throwsPerDay);
        throwsArray.push(totalThrows);
      }
  
      return throwsArray;
    }
  
  const options = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Throwing Volume",
        font: {
          size: 18
        }
      }
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: "lightblue",
        fill: "start",
        backgroundColor: "lightblue"
      },
      point: {
          radius: 10,
          hitRadius: 10
      }
    },
    scales: {
      x: {
          display: true,
          ticks: {
              color: "white"
          }
      },
      y: {
          display: true,
          ticks: {
              color: "white"
          }
      }
    }
  }
  
  var defaultData = {
    labels: [...Array(100).keys()],
    datasets: [{data: calculateThrowVolume(50, 10, 100)}]
  };
  
  return (
    <div>
      <main>
        <h1>
          Welcome to Baseball Toolbox
        </h1>

        <Line data={defaultData} width={100} height={30} options={options}></Line>

      </main>
    </div>
  );
}