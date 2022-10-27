//Rebound Studios, 2022
//Author: Joel Williams

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { HomeView } from '../views'

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

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Baseball Toolbox</title>
        <meta name="description" content="Baseball Toolbox homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </div>
  );
  
}

export default Home;
