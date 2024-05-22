"use client";

import { getTotalByGender, getVacationDayByYear } from "@/api/chart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

type DataItem = {
  male: number;
  female: number;
  month: number;
};

type Data = {
  name: string;
  value: number;
}[];

const MyPieChart = () => {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    getVacation();
  }, []);

  const getVacation = async () => {
    try {
      const response = await getTotalByGender(2024);

      const newData = response.data.finalResult.reduce(
        (acc: DataItem, item: DataItem) => {
          return {
            male: acc.male + item.male,
            female: acc.female + item.female,
          };
        },
        {
          male: 0,
          female: 0,
        }
      );

      const primeData: Data = [
        {
          name: "male",
          value: newData.male as number,
        },
        {
          name: "female",
          value: newData.female as number,
        },
      ];

      setData(primeData);
    } catch (error) {
      console.error(error);
    }
  };

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>Total salary by gender in a year</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MyPieChart;
