//Rebound Studios, 2022
//Author: Joel Williams yessir

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
  } from 'chart.js'
import { Line } from 'react-chartjs-2'

/** Below Info from DRIVELINE BASEBALL */

//One Throw Workload formula: ((valgusTorque) / (height * weight)) ^ 1.3
//To find the workload units within each day, we find the sum total of all one throw workloads within that given day. We title this metric One Day Workload.

/*
  IF there are greater than 50 throws remaining:

    The 5 highest torque values are chosen.
    The average of these 5 throws is found.
    The threshold for “high effort” is determined as 70% of the average.

  IF there are less than 50 throws remaining:

    A default value is assigned based upon:
        Athlete height
        Athlete weight
        Athlete level of competition

  The condition of your arm is not simply impacted by the workload from that given day but is also impacted by the previous days you’ve thrown.
  If we simply took the average for the previous nine days, each day within those nine days would hold the same weight.
  Realistically, throwing today is going to have a larger impact on your throwing tomorrow than your throwing from eight days ago.

  To factor for this, PULSEthrow uses a weighted moving average for each one day workload when calculating an athlete’s acute workload.
  This is accomplished by the use of “Acute Kernels,” in which the workload from the most recent day is multiplied by 1.3, and workloads from previous days are multiplied by lower values, such that eight days prior is multiplied by 0.7

 */

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler);

export default function Home() {

  function calculateThrowVolume(effort, throwsPerDay, days) {

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
    <div className={styles.container}>
      <Head>
        <title>Baseball Toolbox</title>
        <meta name="description" content="Baseball Toolbox homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Baseball Toolbox
        </h1>

        <Line data={defaultData} width={100} height={40} options={options}></Line>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
