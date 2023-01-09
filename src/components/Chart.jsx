import React, { useState } from "react";
import BarChart from "./Types/BarChart";
import { UserData } from "../data/owid-covid-data";
import LineChart from "./Types/LineChart";
import PieChart from "./Types/PieChart";
const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [userLost, setUserLost] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className=" w-full h-full mt-7 p-30 grid  grid-cols-1 md:grid-cols-2 justify-between items-center">
      <div className="w-full max-w-[600px] m-auto  ">
        <BarChart chartData={userData} />
      </div>
      <div className="w-full max-w-[600px] m-auto  ">
        <BarChart chartData={userLost} />
      </div>
      <div className="w-full max-w-[600px] m-auto mt-10 ">
        <LineChart chartData={userData} />
      </div>
      <div className="w-full max-w-[370px] mx-auto  mt-4">
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default Chart;
