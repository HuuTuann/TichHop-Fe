"use client";

import { getVacationDayByYear } from "@/api/chart";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MyLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getVacation();
  }, []);

  const getVacation = async () => {
    try {
      const response = await getVacationDayByYear(2024);
      setData(response.data.finalResult);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="col-span-3">
      <CardHeader>Number of vacation days by month</CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="male"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="female" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MyLineChart;
