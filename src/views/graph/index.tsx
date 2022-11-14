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
import { Dropdown, DropdownItem } from '../../components/dropdown';

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

export const GraphView: FC = ({ }) => {

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
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: 'top' as const
      },
      title: {
        display: true,
        text: "Throwing Volume",
        font: {
          size: 18
        }
      }
    }
  }
  
  var defaultData = {
    labels: [...Array(100).keys()],
    datasets: [
      {
        label: "Throws",
        data: calculateThrowVolume(50, 10, 100),
        borderColor: "#38bdf8"
      }
    ]
  };
  
  return (
    <div className="flex h-full mx-auto items-center justify-center">
      <div className="flex flex-col h-full w-[10%] my-24 mx-auto">
        <Dropdown title="Big Dataset">
          <DropdownItem text="Workload" />
        </Dropdown>
      </div>
      <div className="w-2/3">
        <h1 className="text-3xl text-center font-bold my-4">
          Welcome to Baseball Toolbox
        </h1>
    
        <Line options={options} data={defaultData} />
      </div>
      <div className="w-[10%] mx-auto p-1 bg-zinc-400">
        <div className="px-0.5">
          <h2>Bye guys</h2>
        </div>
      </div>
    </div>
  );
}