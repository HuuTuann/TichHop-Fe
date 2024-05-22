"use client";

import MyLineChart from "@/components/home/line-chart";
import Notification from "@/components/home/notification";
import MyPieChart from "@/components/home/pie-chart";

const MyHome = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-5">
        <MyLineChart />
        <MyPieChart />
      </div>
      <div>
        <Notification />
      </div>
    </>
  );
};

export default MyHome;
